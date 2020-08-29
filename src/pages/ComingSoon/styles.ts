import styled from 'styled-components/native';
import { Platform } from 'react-native'

import constants from 'expo-constants'
import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ? constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight}px;  

  align-items: center;
  justify-content: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: roboto_500;
  font-size: 30px;
`;
