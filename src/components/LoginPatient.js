import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from '../common/Button';
import { Actions } from 'react-native-router-flux';
import Input from '../reusable/Input';
import CheckBox from 'react-native-checkbox';

const devWidth = Dimensions.width;

const signUpProposal=(
	<View style={{ flexDirection: 'row' }}>
		<Text>Don't have account, </Text>
		<TouchableOpacity>
			<Text style={{ color: '#FF00AE' }}>
				Signup
			</Text>
		</TouchableOpacity>
	</View>
);

class LoginPatient extends Component {
	constructor (props) {
		super(props);
		this.state = { rememberLogin: false }
	}

	render () {
		const checkbox=(
			<CheckBox
				label='Remember me!'
				labelStyle={{ color: '#FF00AE', fontSize: 12 }}
				checked={this.state.rememberLogin}
				checkboxStyle={{ borderColor: '#FF00AE', borderWidth: 1, height: 10, width: 10 }}
				containerStyle={{ width: 250 }}
				onChange={() => this.setState({ rememberLogin: ! this.state.rememberLogin })}
			/>
		);

		return (
			<View style={{ flex: 1 }}>
				<Image
					style={styles.image}
					source={require('../../images/logo.png')}
				/>

				<View style={[styles.loginPatientContainer]}>
					<Input label="User name"/>
					<Input label="Password"/>

					{checkbox}

					<Button> Go! </Button>

					{signUpProposal}
				</View>
			</View>
		)
	}
}

const styles = {
	image: { height: 250, width: devWidth },
	text: { textAlign: 'center', fontSize: 22, color: 'black' },
	loginPatientContainer: { flex: 1, marginTop: 40, alignItems: 'center' },
	c: { borderWidth: 1, borderColor: 'red' }
};

export default LoginPatient;