import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import colors from '../utils/colors'
import Logo from './Logo'
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { useAppDispatch } from '../store'
import { logOut } from '../store/slices/authFlow.slice'

const Header: React.FC<BottomTabHeaderProps> = (props) => {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Alert.alert('Logout 🚀', 'Are you sure you want to logout?', [
      {
        text: 'Logout',
        onPress: () => dispatch(logOut())
      },
      {
        text: 'Cancel'
      }
    ])
  }
  return (
    <View {...props} style={styles.container}>
      <Pressable>
        <Logo />
      </Pressable>
      <View style={styles.search}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          placeholder='Search in basket'
        />
      </View>
      <SimpleLineIcons onPress={handleLogout} name="menu" size={24} color={colors.primary} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 12,
    gap: 20,
    backgroundColor: colors.secondary,
    elevation: 8
  },
  search: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})