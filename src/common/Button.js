import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style, disabled }) => {
	const { buttonStyle, textStyle, } = styles;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={ disabled ? buttonStyle : [buttonStyle, style] }
			disabled={disabled}
		>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'stretch',
		textAlign: 'center',
		color: 'white',
		fontSize: 18,
		fontWeight: '800',
		paddingTop: 10,
		paddingBottom: 10,
		// borderColor:'red',
		// borderWidth: 1
	},
	buttonStyle: {
		// flex: 1,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: '#FF00AE',
		marginHorizontal: 10,
		height: 32,
		width: 250,
		marginVertical: 10
		// borderColor:'red',
		// borderWidth: 1
	},
};

export { Button };