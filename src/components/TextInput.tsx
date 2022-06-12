import React, { FC, useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Feather as Icon } from '@expo/vector-icons';

import theme, { Box, Text } from './Theme';

const styles = StyleSheet.create({
  container: {
    height: 56,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.primary1,
    paddingHorizontal: 15,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  eye: {
    position: 'absolute',
    right: 20,
  },
  flag: {
    position: 'absolute',
    zIndex: 10,
    marginLeft: 15,
    flexDirection: 'row',
    borderRightWidth: 1.5,
    height: 41,
    alignItems: 'center',
    borderColor: theme.colors.text2,
    paddingRight: 15,
  },
  search: {
    position: 'absolute',
    zIndex: 10,
    marginLeft: 15,
    flexDirection: 'row',
    marginRight: wp(2),
  },
  error: {
    position: 'absolute',
    top: 28,
  },
  location: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
});

interface Props extends TextInputProps {
  type: 'number' | 'input' | 'search' | 'description' | 'profileInput';
  placeholder: string;
  icon?: 'mail' | 'search';
  secured?: boolean;
  inputRef?: any;
  error?: string;
  width?: number;
  errorRight?: number;
  location?: () => void;
  height?: number;
  noBorderRadius?: boolean;
  
}

const TextInput: FC<Props> = ({
  placeholder,
  secured,
  icon,
  type,
  inputRef,
  error,
  width,
  errorRight,
  location,
  noBorderRadius,
  
 
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <>
       <Box
      style={[
        styles.container,
        { borderRadius: noBorderRadius ? undefined : 6 },
      ]}
    >
      <Box
        style={[
          styles.inputContainer,
          { borderRadius: noBorderRadius ? undefined : 6 },
        ]}
      >
        {type === 'search' && (
          <Box style={styles.search}>
            <Icon name="search" color="#C4C4C4" size={20} />
          </Box>
        )}

        {location && (
          <TouchableOpacity style={styles.location} onPress={location}>
            <Icon name="map-pin" size={20} color={theme.colors.text2} />
          </TouchableOpacity> 
        )}

        <RNTextInput
          placeholder={placeholder}
          style={[
            styles.input,
            {
              paddingTop: props.multiline ? 15 : undefined,
              width: width || theme.layout.screenWidth,
              height: type === 'input' ? 56 : type === 'description' ? 100 : 53 ? type === 'profileInput' ? 43 : 53: 100,
              borderRadius: noBorderRadius ? undefined : 6,
            },
          ]}
          placeholderTextColor={theme.colors.text2}
          ref={inputRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          secureTextEntry={secured ? !visible : false}
        />

        {secured && (
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={styles.eye}
          >
            {visible ? (
              <Icon name="eye-off" color={theme.colors.text2} size={20} />
              
            ) : (
              <Icon name="eye" color={theme.colors.text2} size={20} />
            )}
          </TouchableOpacity>
        )}

        {icon && (
          <Box style={styles.eye}>
             <Icon name={icon} color={theme.colors.text2} size={20} />
          </Box>
        )}

        {error && (
          <Box style={[styles.error, { right: errorRight || 10 }]}>
            <Text variant="title3" color="primary5">
              {error}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
    </>
  );
};

export default TextInput;
