import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../utils/colors'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/images/clothes.jpeg')}
      style={styles.container}
    >
      {/* Background Overlay */}
      <View style={styles.bgOverlay}></View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <EvilIcons name="cart" style={styles.logo} size={64} color="white" />
        <Text style={styles.logoText}>basket</Text>
      </View>

      {/* Hero Text */}
      <Text style={styles.heroText}>Start Shopping.</Text>
      <Text style={styles.heroText}>Stay Happy.</Text>
      <Text style={styles.heroText}>Anytime.</Text>

      {/* Bottom Container */}
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Basket Online Market Place</Text>
        <View style={styles.footer}>
          <Pressable onPress={() => navigation.navigate('Login' as never)}>
            <Text style={styles.footerText}>Skip</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('GetStarted' as never)}>
            <Text style={styles.footerText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 30
  },
  logoContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    elevation: 8,
    zIndex: 10,
    overflow: 'hidden',
    position: 'relative'
  },
  logo: {
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'pacifico'
  },
  heroText: {
    fontSize: 30,
    color: 'white',
    zIndex: 10
  },
  bgOverlay: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(33, 42,62 , 0.75)'
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    width: '100%',
  },
  bottom: {
    borderWidth: 1,
    alignItems: 'center'
  },
  bottomText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  footerText: {
    color: colors.primary,
    fontSize: 18
  }
})