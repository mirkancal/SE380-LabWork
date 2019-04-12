import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LightBulb from './LightBulb';

interface IState {}

interface IProps {
	isLightOn: boolean;
	classRoomButton: any;
}

export default class LightButton extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	toggleBulb() {
		this.props.isLightOn ? (styles.red.backgroundColor = 'green') : null;
	}

	render() {
		return (
			<View style={styles.red}>
				<Button
					title={`Turn light ${this.props.isLightOn ? 'OFF' : 'ON'}`}
					onPress={this.props.classRoomButton}
				/>
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
	red: {
		backgroundColor: 'red',
		padding: 5
	}
});
