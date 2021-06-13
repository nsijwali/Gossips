import { Platform, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../resources/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	mainView: {
		flexGrow: 1,
		paddingTop: RFValue(10),
		paddingBottom: RFValue(10),
		paddingHorizontal: RFValue(20),
		justifyContent: 'space-between',
	},
	textView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
		paddingHorizontal: Platform.OS === 'web' ? 0 : RFValue(20),
	},
	textStyle: {
		fontWeight: 'bold',
		fontSize: RFValue(20),
	},
	textStyle1: {
		fontWeight: 'bold',
		fontSize: RFValue(14),
	},
	textStyle2: {
		flex: 1,
		fontSize: RFValue(15),
		color: colors.meduimGrey,
	},
	btnStyle: {
		backgroundColor: colors.white,
		marginTop: 20,
	},
	flexRowView: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	setMargin: {
		marginTop: 15,
	},
	textInputStyles: {
		height: RFValue(45),
		paddingHorizontal: 20,
		fontSize: RFValue(15),
		borderWidth: 1,
		borderRadius: 4,
		borderColor: colors.meduimGrey,
		width: '100%',
	},
	btnView: {
		marginVertical: 20,
	},
	primaryText: {
		fontSize: RFValue(14),
		color: colors.meduimGrey,
		width: '100%',
		textAlign: 'center',
		paddingTop: 5,
	},
	linkStyle: {
		fontSize: RFValue(14),
		color: colors.primaryBlue,
	},
	linkStyle2: {
		fontSize: RFValue(15),
		color: colors.primaryBlue,
	},
	section: {
		marginTop: 20,
		flexDirection: 'row',
	},
});
