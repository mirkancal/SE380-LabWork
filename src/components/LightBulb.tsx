import React, { Component } from 'react';
import { View, Text, PanResponder, StyleSheet } from 'react-native';

interface IProps {
	isLit?: boolean;
	colorProp?: string;
}
export default class LightBulb extends Component<IProps> {
	render() {
		return (
			<View
				style={
					this.props.isLit ? this.props.colorProp === 'green' ? (
						styles.green
					) : this.props.colorProp === 'red' ? (
						styles.red
					) : (
						styles.blue
					) : (
						styles.green
					)
				}
			>
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
	},
	blue: {
		backgroundColor: 'blue',
		padding: 5
	}
});
