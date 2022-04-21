import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MicIcon from '../../svg/MicIcon';

import theme, { Box, Text } from './Theme';

interface Props {
//   onPress: () => void;
  onLongPress: () => void;
}

const VoiceNoteButton: FC<Props> = ({ onLongPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.touch}
      onLongPress={onLongPress}
    >
      <Box style={styles.button}>
        <MicIcon />
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    // position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    marginBottom: 33,
  },
  button: {
    // resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    zIndex: 1,
  },
});

export default VoiceNoteButton;
