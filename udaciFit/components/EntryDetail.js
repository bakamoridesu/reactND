import React, {Component} from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, purple } from "../utils/colors";
import MetricCard from "./MetricCard";
import { addEntry } from "../actions";
import { removeEntry } from "../utils/Api";
import { timeToString, getDailyReminderValue } from "../utils/helpers";
import TextButton from "./TextButton";

class EntryDetail extends Component {
  componentDidMount() {
    const { entryId } = this.props.route.params
    const year = entryId.slice(0,4)
    const month = entryId.slice(5,7)
    const day = entryId.slice(8)
    const titleString = `${month}/${day}/${year}`
    this.props.navigation.setOptions({title: titleString})
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.metrics !== null && !nextProps.metrics.today
  }

  reset = () => {
    const { remove, goBack, entryId } = this.props
    remove()
    goBack()
    removeEntry(entryId)
  }

  render() {
    const { metrics } = this.props

    return (
      <View style={styles.container}>
          <MetricCard metrics={metrics} />
          <TextButton onPress={this.reset} style={{margin: 20, backgroundColor:white}}>
            Reset
          </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  }
})

function mapStateToProps (state, { navigation, route }) {
  const { entryId } = route.params

  return {
    entryId,
    metrics: state[entryId],
  }
}

function mapDispatchToProps(dispatch, {navigation, route}) {
  const { entryId } = route.params
  return {
    remove: () => dispatch(addEntry({
      [entryId]: timeToString() === entryId ? getDailyReminderValue() : null
    })),
    goBack: () => navigation.goBack()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail)