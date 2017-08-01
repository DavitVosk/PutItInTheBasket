import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from '../common/Button';
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.width;

class LoginOption extends Component {
	constructor (props) {
		super(props);
		this.state = { touchedSections: ['first'] }
	}

	render () {
		console.log('state', this.state.touchedSections);
		return (
			<View style={{ flex: 1 }}>
				<Image
					style={styles.image}
					source={require('../../images/logo.png')}
				/>

				<View style={styles.sectionsContainer}>
					<View style={{ flex: 1, }}>
						<TouchableOpacity
							onPress={() => this.setState({ touchedSections: ['first'] })}>
							<Text style={{ ...styles.sectionLabel, color: 'white' }}>SELECT PHARMACY LOCATION</Text>
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1 }}>
						<TouchableOpacity
							onPress={() => this.setState({ touchedSections: ['first', 'second'] })}>
							<Text style={{
								...styles.sectionLabel,
								color: this.state.touchedSections.indexOf('second') > - 1 ? 'white' : 'black'
							}}>CALL YOUR PHARMACY</Text>
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1 }}>
						<TouchableOpacity
							onPress={() => this.setState({ touchedSections: ['first', 'second', 'third'] })}>
							<Text style={{
								...styles.sectionLabel,
								color: this.state.touchedSections.indexOf('third') > - 1 ? 'white' : 'black'
							}}>PAYMENT</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ marginTop: 2, flexDirection: 'row', height: 20, }}>
					<View style={{  flex:1, height: 2, width: windowWidth / 3, backgroundColor: '#FF00AE', marginRight: 2 }}/>

					{this.state.touchedSections.indexOf('second') > - 1 ?
						<View style={{ flex: 1, height: 2, width: windowWidth / 3, backgroundColor: '#FF00AE', marginRight: 2 }}/>
						:
						<View style={{ flex: 1, height: 2, width: windowWidth / 3, backgroundColor: 'white', marginRight: 2 }}/>
					}

					{this.state.touchedSections.indexOf('third') > - 1 ?
						<View style={{ flex: 1, height: 2, width: windowWidth / 3, backgroundColor: '#FF00AE', marginRight: 2 }}/>
						:
						<View style={{ flex: 1, height: 2, width: windowWidth / 3, backgroundColor: 'white', marginRight: 2 }}/>
					}

				</View>

				<Button>
					Next
				</Button>

			</View>
		)
	}
}

const styles = {
	image: { height: 250, width: windowWidth },
	text: { textAlign: 'center', fontSize: 22, color: 'black' },
	loginOptionContainer: { flex: 1, marginTop: 40, },
	c: { borderWidth: 1, borderColor: 'red' },
	sectionsContainer: {
		height: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF00AE'
	},
	sectionLabel: { fontSize: 10, color: 'black', textAlign: 'center' }
};

export default LoginOption;