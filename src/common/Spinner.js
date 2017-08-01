import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// ActivityIndicator is spinner

const Spinner = ({ size, children, loading }) => {
	const spinner = (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || "large"}/>
		</View>
	);

	const content = loading ? spinner : children;
	return content;
};

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
};

export { Spinner };