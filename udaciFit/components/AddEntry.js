import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {getMetricMetaInfo} from "../utils/helpers"
import UdSlider from "./UdSlider";
import UdStepper from "./UdStepper";
import DateHeader from "./DateHeader";
import {timeToString} from "../utils/helpers";

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>Submit</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {

  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }

  increment = (metric) => {
    const {max, step} = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]: count >= 0 ? count : 0
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state

    // update redux

    this.setState({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    })
    // navigate to home

    // save to 'db'

    // clean local notification
  }

  render() {
    const metaInfo = getMetricMetaInfo()

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()}/>
        {Object.keys(metaInfo).map((key) => {
          const {getIcon, type, ...rest} = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {
                type === 'slider'
                  ? <UdSlider
                    value={value}
                    onChange={(value) => this.slide(key, value)}
                    {...rest}/>
                  : <UdStepper
                    value={value}
                    onIncrement={() => this.increment(key)}
                    onDecrement={() => this.decrement(key)}
                    {...rest}
                  />
              }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}