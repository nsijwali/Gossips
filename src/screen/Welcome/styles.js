import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../resources/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.screenBg,
	},
	mainView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	textStyle: {
		color: colors.textColor,
		fontWeight: 'bold',
		fontSize: RFValue(35),
	},
	btnStyle: {
		backgroundColor: colors.background,
		marginTop: 20,
		width: '100%',
	},
	btnStyle2: {
		color: colors.textColor,
	},
	btnTextStyle: {
		color: colors.textColor,
	},
	bottomView: {
		position: 'absolute',
		bottom: 30,
		right: 20,
		left: 20,
	},
});
