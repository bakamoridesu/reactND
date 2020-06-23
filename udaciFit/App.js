import React, {Component} from 'react';
import { Text, View, StyleSheet, Platform, StatusBar } from 'react-native';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from './reducers'
import History from "./components/HIstory";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AddEntry from "./components/AddEntry";
import {purple, white} from "./utils/colors";
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Constants from "expo-constants";
import { createStackNavigator } from '@react-navigation/stack';

function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <UdaciStatusBar backgroundColor={purple} barStyle='light-content'/>
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            activeTintColor: Platform.OS === 'ios' ? purple : white,
            style: {
              height: 56,
              backgroundColor: Platform.OS === 'ios' ? white : purple,
              shadowRadius: 3,
              shadowOpacity: 0.8,
              shadowColor: 'rgba(0,0,0,0.24)',
              shadowOffset: {
                width: 0,
                height: 3,
              }
            }
          }}
          navigationOptions={{
            header: null
          }}>
            <Tab.Screen
              name="History"
              component={History}
              options={{
                tabBarIcon: ({color}) => (<Ionicons name='ios-bookmarks' size={30} color={color}/>),

              }}/>
            <Tab.Screen
              name="Add Entry"
              component={AddEntry}
              options={{
                tabBarIcon: ({color}) => <FontAwesome name='plus-square' size={30} color={color}/>,
              }}/>

          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
