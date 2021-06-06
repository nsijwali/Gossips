import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../resources/color';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryBlue,
	},
	mainView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: RFValue(35),
	},
	btnStyle: {
		backgroundColor: colors.white,
		marginTop: 20,
	},
	btnStyle2: {
		color: colors.white,
	},
	btnTextStyle: {
		color: colors.primaryBlue,
	},
	bottomView: {
		position: 'absolute',
		bottom: 30,
		right: 20,
		left: 20,
	},
});
