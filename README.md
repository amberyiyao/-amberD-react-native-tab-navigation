# @wezyy1/rn-animated-tab-nav
[![Generic badge](https://img.shields.io/badge/npm-6.14.4-green.svg)](https://www.npmjs.com/package/@wezyy1/rn-animated-tab-nav)

The tag bar component is mainly used for bottom navigation, which is convenient for users to switch between different pages quickly. And it is suggested that the number of tags should be controlled within 3-5.

## Installation

Installation can be done by using the **npm install command**:
```bash
$ npm install @wezyy1/rn-animated-tab-nav
```

## Demo (Default Style)

![demo](https://amberyiyao.github.io/tryUploadImg/1590356174629549.gif)


## Quick Start

```javascript

import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import TabNav from '@wezyy1/rn-animated-tab-nav'

export default class App extends React.Component{

  state = {
    currentPageIndex: 0,
    tabInfo:[{
      id: 1,
      label: 'Home',
      icon: 'home',
      color:'#10A8F6',
      backgroundColor:'#E9F8FF'
  },{
      id: 2,
      label: 'Dairy',
      icon: 'book',
      color:'#F65E10',
      backgroundColor:'#FFF1E9'

  },{
      id: 3,
      label: 'Search',
      icon: 'search',
      color:'#A79507',
      backgroundColor:'#FFFBDC'
  },{
      id: 4,
      label: 'Me',
      icon: 'user',
      color:'#7B14DA',
      backgroundColor:'#EBDAFA'
  }]
  }

  handlePressTab = (pageValue) => {
    this.setState({currentPageIndex: pageValue})
  }

  render(){
    const { currentPageIndex } = this.state

    let mainPage = <View><Text>Home</Text></View>
    if(currentPageIndex === 1){
      mainPage = <View><Text>Book</Text></View>
    } else if (currentPageIndex === 2){
      mainPage = <View><Text>Search</Text></View>
    } else if (currentPageIndex === 3){
      mainPage = <View><Text>Me</Text></View>
    }

    return(
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          {mainPage}
          <TabNav handlePressTab={this.handlePressTab} tabInfo={this.state.tabInfo} currentPageIndex={this.state.currentPageIndex}/>
        </View>
      </SafeAreaView>
    )
  }
}

```

[Try this example on Snack](https://snack.expo.io/0j0iJiY6I)

## Use Tab Navigation with Stack Navigation

You can use this tab Navigation with react native stack navigation as well. 
[Documentation of React Navigation](https://reactnative.dev/docs/navigation)

Example:
```javascript

import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import TabNav from '@wezyy1/rn-animated-tab-nav'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Home = ({navigation}) => <View><Text onPress={() => navigation.navigate('HomeDetail')}>Home</Text></View>
const HomeDetail = () => <View><Text>HomeDetail</Text></View>

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="HomeDetail" component={HomeDetail}/>
    </HomeStack.Navigator>
  );
}

export default class App extends React.Component{

  state = {
    currentPageIndex: 0,
    tabInfo:[{
      id: 1,
      label: 'Home',
      icon: 'home',
      color:'#10A8F6',
      backgroundColor:'#E9F8FF'
  },{
      id: 2,
      label: 'Dairy',
      icon: 'book',
      color:'#F65E10',
      backgroundColor:'#FFF1E9'

  },{
      id: 3,
      label: 'Search',
      icon: 'search',
      color:'#A79507',
      backgroundColor:'#FFFBDC'
  },{
      id: 4,
      label: 'Me',
      icon: 'user',
      color:'#7B14DA',
      backgroundColor:'#EBDAFA'
  }]
  }

  handlePressTab = (pageValue) => {
    this.setState({currentPageIndex: pageValue})
  }

  render(){
    const { currentPageIndex } = this.state

    let mainPage = <HomeStackScreen/>
    if(currentPageIndex === 1){
      mainPage = <View><Text>Book</Text></View>
    } else if (currentPageIndex === 2){
      mainPage = <View><Text>Search</Text></View>
    } else if (currentPageIndex === 3){
      mainPage = <View><Text>Me</Text></View>
    }

    return(
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <NavigationContainer>
            {mainPage}
          </NavigationContainer>
          <TabNav handlePressTab={this.handlePressTab} tabInfo={this.state.tabInfo} currentPageIndex={this.state.currentPageIndex}/>
        </View>
      </SafeAreaView>
    )
  }
}

```
[Try this example on Snack](https://snack.expo.io/ITJHGBjoI_)

## API

### Props

|Property|Description|Type|Required|
|-|:-:|:-:|-:|
|tabInfo|This is an array of the information of the tab navigation. (See more detail in the next table.)|Array|ture|
|tabStyle|The style of the tab bar contener.|Style Object|false|
|itemStyle|The style of the tab item.|Style Object|false|
|currentPageIndex|This is the index of the active item.|Number|true|
|handlePressTab|Callback Function when press tab item. This function will get the index of the pressed tab item.|Function|true|

### tabInfo Properties

|Property|Description|Type|Required|
|-|:-:|:-:|-:|
|label|The label displayed in the tab item.|String|true|
|icon|The name of the icon you want to use. [Feather Icon](https://feathericons.com/) is suported. You can find the icon and name [here](https://feathericons.com/).|String|true|
|color|The color of the icon and label when the item is active. |Color String|true|
|backgroundColor|The color of background when the item is active. |Color String|true|