import { Platform, StyleSheet, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../resources/color';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	mainView: {
		flexGrow: 1,
		paddingTop: RFValue(10),
		paddingBottom: RFValue(10),
		paddingHorizontal: RFValue(20),
		justifyContent: 'space-between',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: RFValue(15),
	},
	textView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
		paddingHorizontal: Platform.OS === 'web' ? 0 : RFValue(20),
	},
	addChatView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		paddingHorizontal: Platform.OS === 'web' ? 0 : RFValue(20),
	},
	flexRowView: {
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	topView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		// width: '100%',
	},
	textInputStyles: {
		height: RFValue(45),
		paddingHorizontal: 20,
		fontSize: RFValue(15),
		borderWidth: 1,
		borderRadius: 50,
		borderColor: colors.meduimGrey,
		backgroundColor: colors.white,
		width: '100%',
	},
	btnView: {
		bottom: 0,
		height: RFValue(40),
		flex: 1,
		marginRight: RFValue(15),
		borderWidth: 1,
		borderRadius: 50,
		borderColor: colors.meduimGrey,
		backgroundColor: colors.white,
		padding: 10,
	},
	primaryText: {
		fontSize: RFValue(14),
		color: colors.meduimGrey,
	},
	userText: {
		fontSize: RFValue(12),
		color: colors.meduimGrey,
	},

	currentUserText: {
		fontSize: RFValue(14),
		// color: colors.primaryBlue,
		// borderRadius: 20,
		// // borderColor: colors.meduimGrey,
		// backgroundColor: colors.white,
		// margin: 10,
		padding: RFValue(10),
	},
	receiver: {
		padding: RFValue(15),
		alignSelf: 'flex-end',
		marginRight: 15,
		marginBottom: 10,
		maxHeight: '80%',
		position: 'relative',
		borderRadius: 20,
		// borderColor: colors.meduimGrey,
		backgroundColor: colors.white,
	},
	sender: {
		padding: RFValue(15),
		alignSelf: 'flex-start',
		margin: 10,
		maxHeight: '80%',
		position: 'relative',
		borderRadius: 20,
		// borderColor: colors.meduimGrey,
		backgroundColor: colors.white,
	},
	receivedText: {
		fontSize: RFValue(14),
		// color: colors.primaryBlue,

		// margin: 10,
		padding: RFValue(10),
	},
	keyboard: {
		flex: 1,
	},
});
