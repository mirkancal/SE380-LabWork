import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LightBulb from './LightBulb';
import LightButton from './LightButton';
import LightColorSelector from './LightColorSelector';

interface IProps {}
interface IState {
	isLit: boolean;
	bulbColor: string;
}
export default class ClassRoom extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isLit: false,
			bulbColor: 'green'
		};

		this.onButtonPress = this.onButtonPress.bind(this);
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor(itemValue: any, itemIndex: any) {
		this.setState({ bulbColor: itemValue });
	}

	onButtonPress() {
		this.state.isLit ? this.setState({ isLit: false }) : this.setState({ isLit: true });
	}
	render() {
		return (
			<View style={styles.blue}>
				<LightBulb isLit={this.state.isLit} colorProp={this.state.bulbColor} />
				<LightButton classRoomButton={this.onButtonPress} isLightOn={this.state.isLit} />

				<LightColorSelector changeColor={this.changeColor} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	green: {
		backgroundColor: 'green',
		padding: 5
	},
	blue: {
		backgroundColor: 'blue',
		padding: 5
	}
});
