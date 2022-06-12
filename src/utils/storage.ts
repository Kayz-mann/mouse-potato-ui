/* eslint-disable consistent-return */
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const getData = async (key: string): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

const checkData = async (key: string): Promise<boolean | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export default {
  storeData,
  getData,
  checkData,
  removeData,
};
