import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text } from './Theme';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    justifyContent: 'center',
      marginTop: 200,
    },
  });

const ListEmpty: React.FC = () => {
    return <Box style={styles.container}>
      <Text>Please wait while feeds are loading...</Text>
  </Box>;
}

export default ListEmpty;