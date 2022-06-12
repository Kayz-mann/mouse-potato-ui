import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import MicIcon from '../../svg/MicIcon';
import { Box } from './Theme';

interface Props {
  onLongPress: () => void;
}

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



export default VoiceNoteButton;
