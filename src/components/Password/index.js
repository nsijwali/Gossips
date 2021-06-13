import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styled from './styles';

const InputPassword = ({ password, styles, setPassword }) => {
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		setToggle(true);
	}, []);

	const showPassword = () => {
		setToggle(!toggle);
	};
	return (
		<View style={styled.container}>
			<TextInput
				value={password}
				placeholder='*******'
				onChangeText={(text) => setPassword(text)}
				style={styles}
				secureTextEntry={toggle}
				autoCorrect={false}
			/>
			<TouchableOpacity activeOpacity={0.3} style={styled.eyeIcon}>
				<Entypo
					name={toggle ? 'eye-with-line' : 'eye'}
					size={20}
					onPress={showPassword}
					color='grey'
				/>
			</TouchableOpacity>
		</View>
	);
};

export default InputPassword;
