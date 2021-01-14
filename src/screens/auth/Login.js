import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {mlColors, dimensionHeight} from '../../services/colors/colors';
import {setToken} from '../../services/storage/asyncStorage';
import {snack} from '../../services/snack/snackbar';

const Login = ({isAuth, checkIsLogin}) => {
  const [isCredential, setIsCredential] = useState(false);
  const [credentials, setCredentials] = useState({
    email: 'Admin',
    password: '12345',
  });
  const {email, password} = credentials;

  const onSubmit = async () => {
    {
      email !== 'Admin' || password !== '12345'
        ? [
            setIsCredential(false),
            snack('Email и пароль не действительны, Попробуйте снова!'),
          ]
        : [setIsCredential(true), await set(), snack('Успешно!')];
    }
  };

  async function set() {
    await setToken('@authToken', JSON.stringify(isCredential));
    checkIsLogin();
  }

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={!isAuth}
      onRequestClose={() => !this.isAuth}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <Text style={styles.logo}>Online Magazine</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'email-address'}
            style={styles.text_input}
            placeholder="********@gmail.com"
            value={email}
            onChangeText={(text) =>
              setCredentials({...credentials, email: text})
            }
          />
          <TextInput
            style={styles.text_input}
            placeholder="**********"
            secureTextEntry
            value={password}
            onChangeText={(text) =>
              setCredentials({...credentials, password: text})
            }
          />
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity
            title="Login"
            style={styles.button}
            onPress={() => onSubmit()}>
            <Text style={styles.text_button}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: mlColors.dark_red,
    padding: 40,
    height: dimensionHeight,
  },
  logo: {
    color: mlColors.light_yellow,
    fontWeight: '900',
    fontSize: 65,
    marginBottom: 50,
  },
  text_input: {
    height: 55,
    backgroundColor: 'rgba(236,239,241 ,1)',
    marginBottom: 15,
    paddingLeft: 20,
    borderRadius: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mlColors.light_yellow,
    height: 55,
    marginBottom: 20,
    borderRadius: 30,
  },
  text_button: {
    color: mlColors.black,
    fontWeight: '700',
    fontSize: 16,
  },
  error: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    color: mlColors.white,
  },
});
