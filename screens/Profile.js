import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class Home extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Profile'
		// Can add icons for the tabs, check out TabNavigator
	}
	render() {
		return (
			<View style={
				{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}
			}>
			<Text style={{fontSize: 30}}> User Information </Text>
			</View>
		)
	}
}