import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import theme, { Box, Text } from './Theme';

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});

interface Props {
  type: 'secondary' | 'primary' | 'transparent';
  label: string;
  onPress: () => void;
  width?: number | string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  type,
  label,
  onPress,
  width,
  loading,
  disabled,
}) => {
  const returnBgColor = () => {
    if (type === 'primary' && !disabled) return theme.colors.primary3;
    if (type === 'primary' && disabled) return theme.colors.primary3;
    if (type === 'secondary') return '#F0F0F0';
  };

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.6}
      style={[
        styles.container,
        {
          backgroundColor: returnBgColor(),
          width: width || theme.layout.screenWidth,
          borderColor:
            type === 'transparent' ? theme.colors.primary1 : returnBgColor(),
          borderWidth: 1,
        },
      ]}
      onPress={!disabled ? onPress : () => true}
    >
      {loading ? (
        <ActivityIndicator
          color={type === 'primary' ? theme.colors.bg1 : theme.colors.text1}
        />
      ) : (
        <Text
          variant="title2"
          color={
            type === 'primary'
              ? 'bg1'
              : type === 'transparent'
              ? 'primary1'
              : 'text2'
          }
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
