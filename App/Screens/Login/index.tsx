import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Surface, Text, TextInput } from 'react-native-paper';
import { useUserLoginMutation } from '../../RTK/Api/AuthApi';
import { Button, Spinner } from '../../Components';
import { Images } from '../../Images';
import { CommonStyles } from '../../Theme';
import { AuthText } from '../../Strings';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useUserLoginMutation();

  return (
    <ImageBackground source={Images.loginBg} style={CommonStyles.flex}>
      <View style={CommonStyles.centeredContainer}>
        <Surface elevation={5} style={styles.formContainer}>
          <Text
            variant="titleLarge"
            style={[CommonStyles.centerText, CommonStyles.boldText]}>
            {AuthText.welcomeBack}
          </Text>
          <View style={CommonStyles.fieldMarginTop}>
            <TextInput
              autoCapitalize="none"
              value={email}
              mode="outlined"
              label={AuthText.email}
              onChangeText={str => setEmail(str)}
            />
          </View>
          <View style={CommonStyles.fieldMarginTop}>
            <TextInput
              value={password}
              mode="outlined"
              label={AuthText.password}
              onChangeText={str => setPassword(str)}
            />
          </View>
          <Button
            label={AuthText.login}
            onPress={() =>
              login({
                email,
                password,
              })
            }
            style={CommonStyles.fieldMarginTop}
          />
          <View style={[CommonStyles.row, CommonStyles.fieldMarginTop]}>
            <Text>{AuthText.signupMessage}</Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.navigate('Register')}>
              <Text>{AuthText.signUp}!</Text>
            </TouchableOpacity>
          </View>
        </Surface>
      </View>
      <Spinner visible={isLoading} />
    </ImageBackground>
  );
};

export default Login;
