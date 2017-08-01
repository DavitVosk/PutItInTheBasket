import React from 'react';
import { View } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';

const textInput = ({ label }) => {
	return (
		<View style={{ width: 250 }}>
			<Hoshi
				label={label}
				// this is used as active border color
				borderColor={'#FF00AE'}
				// this is used to set backgroundColor of label mask.
				// please pass the backgroundColor of your TextInput container.
				// backgroundColor={'#F9F7F6'}
			/>
		</View>
	);
};

export default textInput;

