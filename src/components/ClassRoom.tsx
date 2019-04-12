import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LightBulb from './LightBulb';
import LightButton from './LightButton';

interface IProps {}
interface IState {
	isLit: boolean;
}
export default class ClassRoom extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isLit: false
		};

		this.onButtonPress = this.onButtonPress.bind(this);
	}

	onButtonPress() {
		this.state.isLit ? this.setState({ isLit: false }) : this.setState({ isLit: true });
	}
	render() {
		return (
			<View style={styles.blue}>
				<LightBulb isLit={this.state.isLit} />
				<LightButton classRoomButton={this.onButtonPress} isLightOn={this.state.isLit} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	blue: {
		backgroundColor: 'blue',
		padding: 5
	}
});
