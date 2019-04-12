import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

interface IProps {
	changeColor: any;
}
interface IState {
	selectedColor: string;
}

export default class LightColorSelector extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			selectedColor: 'green'
		};
	}
	render() {
		return (
			<View style={styles.blue}>
				<Picker
					selectedValue={this.state.selectedColor}
					style={styles.blue}
					onValueChange={(itemValue, itemIndex) => {
						this.setState({ selectedColor: itemValue });
						this.props.changeColor(itemValue, itemIndex);
					}}
				>
					<Picker.Item label="Blue" value="blue" />
					<Picker.Item label="Red" value="red" />
					<Picker.Item label="Green" value="green" />
				</Picker>
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
