import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import {FontAwesome, Entypo} from '@expo/vector-icons'
import {white, purple, gray, red, blue, pink, orange, lightPurp} from "../utils/colors";

export default function UdStepper({max, unit, step, value, onIncrement, onDecrement}) {
  return (
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
      {Platform.OS === 'ios'
        ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onDecrement} style={styles.iosBtn}>
              <FontAwesome name='minus' size={30} color={'purple'} style={{marginLeft: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onIncrement} style={styles.iosBtn}>
              <FontAwesome name='plus' size={30} color={'purple'} style={{marginLeft: 10}}/>
            </TouchableOpacity>
          </View>
        )
        : (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onDecrement} style={styles.androidBtn}>
              <FontAwesome name='minus' size={30} color={white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onIncrement} style={styles.androidBtn}>
              <FontAwesome name='plus' size={30} color={white} />
            </TouchableOpacity>
          </View>
        )
      }

      <View style={styles.metricCounter}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text style={{fontSize: 12, color: gray}}>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  metricCounter: {
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,
  }
})