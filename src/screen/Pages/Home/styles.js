import { Platform, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../resources/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		fontSize: RFValue(20),
	},
	mainView: {
		flexGrow: 1,
	},
});
