import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const ITEM_WIDTH = width;
export const ITEM_HEIGHT = height * 0.75;

export const dimensionWidth = Dimensions.get('screen').width;
export const dimensionHeight = Dimensions.get('screen').height;

//COLORS
export const mlColors = {
  card: '#eaeff7',
  text: '#DDD',

  brown: '#CFD8DC',
  light_brown: '#9E9E9E',
  white: '#FFFFFF',
  dark_white: '#EEEEEE',
  light_black: '#B0BEC5',
  black: '#455A64',
  blue: '#2196F3',
  light_blue: '#64B5F6',
  dark_blue: '#1565C0',
  yellow: '#FFEB3B',
  light_yellow: '#FFF176',
  dark_yellow: '#F9A825',
  red: '#f44336',
  light_red: '#e57373',
  dark_red: '#c62828',
  green: '#4CAF50',
  light_green: '#81C784',
  dark_green: '#2E7D32',
};
