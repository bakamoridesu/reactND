import React, {Component} from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white } from "../utils/colors";
import MetricCard from "./MetricCard";

class EntryDetail extends Component {
  componentDidMount() {
    const { entryId } = this.props.route.params
    const year = entryId.slice(0,4)
    const month = entryId.slice(5,7)
    const day = entryId.slice(8)
    const titleString = `${month}/${day}/${year}`
    this.props.navigation.setOptions({title: titleString})
  }

  render() {
    const { metrics } = this.props

    return (
      <View>
          <MetricCard metrics={metrics} />
          <Text>
            Entry detail -
          </Text>
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

export default connect(mapStateToProps)(EntryDetail)