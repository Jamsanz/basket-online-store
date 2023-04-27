import { View, StyleSheet, TextInput, TextInputProps } from 'react-native'
import React, { forwardRef } from 'react';
import colors from '../../../utils/colors';

interface InputProps extends TextInputProps {
  leftIcon?: any;
  rightIcon?: any;
  helperText?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
}

const Input = ({ leftIcon, rightIcon, ...props }: InputProps, ref: React.LegacyRef<TextInput> | undefined) => {
  return (
    <View style={styles.container}>
      {
        leftIcon &&
        <View style={styles.leftIcon}>
          {leftIcon}
        </View>
      }
      <TextInput
        style={[styles.input, props.style]}
        {...props}
        ref={ref}
      />
      {
        rightIcon &&
        <View style={styles.rightIcon}>
          {rightIcon}
        </View>
      }
    </View>
  )
}

export default forwardRef(Input);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary
  },
  leftIcon: {
    marginHorizontal: 20,
    marginVertical: 18
  },
  rightIcon: {
    marginHorizontal: 20,
    marginVertical: 18
  },
  input: {
    flex: 1,
    fontSize: 18
  }
});