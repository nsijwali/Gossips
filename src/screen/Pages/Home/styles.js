import { Platform, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../resources/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

		fontSize: RFValue(20),
	},
	mainView: {
		flexGrow: 1,
		// paddingTop: RFValue(60),
		// paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		// justifyContent: 'space-between',
	},
});
