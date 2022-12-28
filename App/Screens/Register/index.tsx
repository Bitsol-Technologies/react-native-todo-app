import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Surface, TextInput, Text } from 'react-native-paper';
import { useSignupMutation } from '../../RTK/Api/AuthApi';
import { Button } from '../../Components';
import { Images } from '../../Images';
import { CommonStyles } from '../../Theme';
import { AuthText } from '../../Strings';
import styles from './styles';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [signup, { isError, isLoading, error, data }] = useSignupMutation();

  console.log(isError, isLoading, error, data);

  useEffect(() => {}, []);
  return (
    <ImageBackground source={Images.loginBg} style={CommonStyles.flex}>
      <View style={CommonStyles.centeredContainer}>
        <Surface elevation={5} style={styles.formContainer}>
          <Text
            variant="titleLarge"
            style={[CommonStyles.centerText, CommonStyles.boldText]}>
            {AuthText.signUpHere}
          </Text>
          <View style={CommonStyles.fieldMarginTop}>
            <TextInput
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
          <View style={CommonStyles.fieldMarginTop}>
            <TextInput
              value={firstName}
              mode="outlined"
              label={AuthText.firstName}
              onChangeText={str => setFirstName(str)}
            />
          </View>
          <View style={CommonStyles.fieldMarginTop}>
            <TextInput
              value={lastName}
              mode="outlined"
              label={AuthText.lastName}
              onChangeText={str => setLastName(str)}
            />
          </View>
          <Button
            label={AuthText.signUp}
            onPress={() =>
              signup({
                email,
                password,
                firstName,
                lastName
              })
            }
            style={CommonStyles.fieldMarginTop}
          />
        </Surface>
      </View>
    </ImageBackground>
  );
};

export default Register;
