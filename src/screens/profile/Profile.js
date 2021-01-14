import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {getToken, removeToken} from '../../services/storage/asyncStorage';
import Login from '../auth/Login';
import {mlColors} from '../../services/colors/colors';

export default function Profile() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkIsLogin = async () => {
    await getToken('@authToken').then((val) => {
      let v = JSON.parse(val);
      setIsAuth(v);
    });
  };

  const clearToken = async () => {
    await removeToken('@authToken').then(() => {
      checkIsLogin();
    });
  };

  useEffect(() => {
    checkIsLogin();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const {container} = styles;

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
          }}>
          Loading ...
        </Text>
      </View>
    );
  }

  return (
    <View style={container}>
      <Login isAuth={isAuth} checkIsLogin={() => checkIsLogin()} />
      <View>
        <Text style={{textAlign: 'center'}}>Welcome to Profile</Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 30,
            paddingHorizontal: 70,
            borderRadius: 40,
            backgroundColor: mlColors.red,
          }}
          onPress={() => clearToken()}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
