import React from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { Text } from 'react-native';

import { Container, Avatar, Status, RightSide, Button } from './styles';
import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <Status />
      </Avatar>
      <RightSide>
        <Button>
          <MaterialIcons name="notifications-none" size={26} color={colors.black} />
        </Button>
        <Button>
          <MaterialIcons name="chat-bubble-outline" size={26} color={colors.black} />
        </Button>
        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
