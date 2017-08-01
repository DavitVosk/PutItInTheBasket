import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { Button } from '../common/Button';
import { Actions } from 'react-native-router-flux';

const devWidth = Dimensions.width;

class LoginOption extends Component {

	render () {
		return (
			<View style={{flex: 1}}>
				<Image
					style={styles.image}
					source={require('../../images/logo.png')}
				/>

				<View style={[styles.loginOptionContainer]}>
					<Text style={styles.text}>
						Login As
					</Text>

					<Button onPress={()=> Actions.loginPatient({type: 'reset'})}>
						Patient
					</Button>

					<Button>
						Driver
					</Button>
				</View>
			</View>
		)
	}
}

const styles = {
	image: { height: 250, width: devWidth },
	text: { textAlign: 'center', fontSize: 22, color:'black'  },
	loginOptionContainer: {flex: 1, marginTop: 40, },
};

export default LoginOption;