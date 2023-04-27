import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import { EvilIcons } from '@expo/vector-icons';


const Logo = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name="cart" size={24} color="white" />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    borderRadius: 23,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
})