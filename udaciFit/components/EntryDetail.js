import React, {Component} from 'react'
import {View, Text} from 'react-native'

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
    return (
      <View>
        <Text>
          Entry Detail - {this.props.route.params.entryId}
        </Text>
      </View>
    )
  }
}

export default EntryDetail