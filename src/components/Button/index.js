import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = ({
	text = 'Button',
	icon,
	disable,
	btnStyle,
	onPress,
	btnTextStyle,
}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={onPress}
			disabled={disable}
			style={[styles.btnContainer, btnStyle]}
		>
			<Text
				style={[styles.btnText, btnTextStyle, { marginRight: icon ? 10 : 0 }]}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
