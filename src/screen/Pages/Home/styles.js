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
	floatingIcon: {
		height: RFValue(50),
		position: 'absolute',
		borderWidth: 1,
		borderRadius: 50,
		borderColor: colors.meduimGrey,
		backgroundColor: colors.meduimGrey,
		width: RFValue(50),
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		bottom: 30,
		right: RFValue(30),
	},
});
