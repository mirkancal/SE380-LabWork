import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LightBulb from './LightBulb';

interface IState {
	isLightOn: boolean;
}

interface IProps {}

export default class LightButton extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isLightOn: false
		};
	}

	toggleBulb() {
		this.state.isLightOn ? this.setState({ isLightOn: false }) : this.setState({ isLightOn: true });
		styles.red.backgroundColor = 'green';
	}

	render() {
		return (
			<View style={styles.red}>
				<LightBulb isLit={this.state.isLightOn} />
				<Button
					title={`Turn light ${this.state.isLightOn ? 'OFF' : 'ON'}`}
					onPress={this.toggleBulb.bind(this)}
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
