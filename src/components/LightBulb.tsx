import React, { Component } from 'react';
import { View, Text, PanResponder, StyleSheet } from 'react-native';

interface IProps {
	isLit: boolean;
	colorProp: string;
}
export default class LightBulb extends Component<IProps> {
	render() {
		return (
			<View style={this.props.isLit ? styles.green : styles.red}>
				<Text>{this.props.isLit ? 'ON' : 'OFF'}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	green: {
		backgroundColor: 'green',
		padding: 5
	},
	red: {
		backgroundColor: 'red',
		padding: 5
	}
});
