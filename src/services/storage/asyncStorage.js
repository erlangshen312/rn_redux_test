import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    // error reading value
  }
};

export const setToken = async (name, token) => {
  try {
    const value = JSON.stringify(token);
    await AsyncStorage.setItem(name, value);
  } catch (e) {
    // saving error
  }
};

export const removeToken = async (name) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (e) {
    // return null;
  }
};
