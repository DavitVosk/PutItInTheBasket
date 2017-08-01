import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginOption from './components/LoginOption';
import LoginPatient from './components/LoginPatient';

const commonProps = {
	hideNavBar: true,
};

// key => component parent
const ScenesStructure = {
	loginOption: { component: LoginOption, ...commonProps },
};

const Scenes = [];

for (var key in ScenesStructure) {
	const SceneProps = ScenesStructure[key];

	Scenes.push(
		<Scene key={key} { ...SceneProps} />
	);
}

const RouterComponent = (props) => (
	<Router>
		{Scenes}
	</Router>
);



export default RouterComponent;