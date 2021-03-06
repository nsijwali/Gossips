import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../resources/color';

export default StyleSheet.create({
	btnContainer: {
		width: '100%',
		height: RFValue(50),
		borderRadius: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		color: colors.primaryBlue,
	},
	btnText: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: RFValue(15),
	},
	btnStyle: {
		backgroundColor: colors.white,
		marginTop: 20,
	},
	btnStyle2: {
		color: colors.primaryBlue,
	},
});
