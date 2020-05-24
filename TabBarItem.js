import React from 'react';
import { Animated, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

export default class TabBarItem extends React.Component{

    state = {
        active: !this.props.data.isActive ? new Animated.Value(0) : new Animated.Value(1)
    }

    componentDidUpdate(){
        Animated.timing(this.state.active, {
            toValue: !this.props.data.isActive? 0 : 1,
            duration: 200,
        }).start()
    }

    render(){
        const{ data, onPress } = this.props

        const itemStyle = {
            alignItems:'center',
            flexDirection:'row',
            backgroundColor: this.state.active.interpolate({
                inputRange: [0, 1],
                outputRange: ['white', data.backgroundColor],
            }),
            borderRadius: this.state.active.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
            }),
            width:this.state.active.interpolate({
                inputRange: [0, 1],
                outputRange: [40, 110],
            }),
            paddingVertical:11,
            justifyContent:'center',
            height:50,
            overflow:'hidden',
            ...this.props.itemStyle
        }

        const textStyle = {
            marginLeft: 8, 
            color:this.state.active.interpolate({
                inputRange: [0, 1],
                outputRange: ['#aaa', data.color],
            }), 
            display: data.isActive? 'flex':'none',
        }

        return(
            <TouchableOpacity onPress={()=>onPress(data.id)}>
                <Animated.View style={itemStyle}>
                    <Icon name={data.icon} color={data.isActive?data.color:'#aaa'} type='feather' size={20}/>
                    <Animated.Text numberOfLines={1} style={textStyle}>{data.label}</Animated.Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }
}