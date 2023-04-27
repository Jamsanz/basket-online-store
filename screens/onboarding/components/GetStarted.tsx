import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../../../components/Logo';
import colors from '../../../utils/colors';
import Button from '../../../components/Button';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.logoText}>basket</Text>
      </View>

      {/* Hero Text */}
      <View style={styles.heroTextContainter}>
        <Text style={styles.heroText}>Welcome to</Text>
        <Text style={styles.title}>basket online store</Text>
        <Text style={styles.heroText}>basket is the no1 online store for both new and used products</Text>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/images/checkout.png')} style={styles.image} />
      </View>

      {/* GetStarted Button */}
      <View style={styles.buttonContainer}>
        <Button
          title='Get Started'
          onPress={() => navigation.navigate('Login' as never)}
          icon={<AntDesign name="arrowright" size={24} color="white" />}
        />
      </View>
    </SafeAreaView>
  )
}

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.secondary,
    alignItems: 'center'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
  logoText: {
    fontSize: 26,
    color: colors.primary,
    fontFamily: 'pacifico'
  },
  heroTextContainter: {
    marginVertical: 50,
    rowGap: 20,
    alignItems: 'center'
  },
  heroText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    width: 300,
    lineHeight: 28,
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: '700'
  },
  imageContainer: {
    height: 250,
    width: 250,
    marginBottom: 10
  },
  image: {
    height: 250,
    width: 250
  },
  buttonContainer: {
    width: '70%'
  }
})