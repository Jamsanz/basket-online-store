import { ActivityIndicator, Pressable, PressableProps, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export interface IButton extends PressableProps {
  title: string;
  loading?: boolean;
  icon?: React.ReactNode;
  color?: string
}

const Button = ({ style, disabled, ...props }: IButton) => {

  return (
    <Pressable
      disabled={disabled || props.loading}
      style={[styles.buttonContainer, disabled && styles.disabled, style as StyleProp<ViewStyle>]}
      {...props}
    >
      {
        props.loading ? <ActivityIndicator color={'white'} /> :
          <View style={styles.textContainer}>
            <Text style={styles.buttonText}>{props.title}</Text>
            {props?.icon}
          </View>
      }
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
    borderRadius: 8
  },
  disabled: {
    backgroundColor: '#BDBDBD'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 10,
    alignItems: 'center'
  }
})