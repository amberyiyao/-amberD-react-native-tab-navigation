import React from 'react';
import { View } from 'react-native';
import TabBarItem from './TabBarItem'

export default class TabBar extends React.Component{

    static defaultProps = {
        tabStyle: {},
        itemStyle:{},
        currentPageIndex:0
    }

    constructor(props){
        super(props)

        const tabInfo = props.tabInfo.map((item, index) => {
            let newItem = item
            newItem.isActive = index == props.currentPageIndex
            return newItem
        })

        this.state = {
            tabInfo
        }
    }

    handleTabPress = (index) => {
        this.props.handlePressTab(index)
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        const tabInfo = this.state.tabInfo.map((item,indx) => {
            let newItem = item
            newItem.isActive = indx == nextProps.currentPageIndex
            return newItem
        })

        this.setState({tabInfo})
    }

    componentDidMount() {
        
    }

    render(){
        const tabItemList = this.state.tabInfo.map((item,index) => <TabBarItem index={index} itemStyle={this.props.itemStyle} onPress={this.handleTabPress} key={item.id} data={item}/>)
        return(
        <View style={{
            backgroundColor:'#fff',
            position:'absolute',
            width:'100%',
            paddingVertical:15,
            flexDirection:'row',
            justifyContent:'space-evenly',
            position:'absolute',
            bottom:0,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            elevation: 15,
            ...this.props.tabStyle
            }}>
              {tabItemList}  
        </View>
        )
    }
}