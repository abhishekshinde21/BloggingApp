import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class Search extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Search'
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
			<Text style={{fontSize: 30}}> Topics </Text>
			</View>
		)
	}
}