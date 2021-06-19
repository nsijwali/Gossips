import { Platform, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../resources/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		fontSize: RFValue(20),
		position: 'relative',
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
		bottom: RFValue(50),
		right: RFValue(30),
	},
	usrLogo: {
		height: RFValue(30),
		width: RFValue(30),
		backgroundColor: colors.screenBg,
		borderRadius: 50,
	},
	popup: {
		width: RFValue(180),
		height: RFValue(70),
		position: 'absolute',
		backgroundColor: '#f6f6f6',
		top: RFValue(24),
		left: RFValue(12),
		padding: RFValue(10),
		borderRadius: 10,
		borderTopLeftRadius: 0,
		shadowColor: '#333',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	userInfo: {
		fontSize: RFValue(14),
	},
});
