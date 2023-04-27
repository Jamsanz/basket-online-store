import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Pressable, ScrollView, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import Logo from '../../../components/Logo';
import colors from '../../../utils/colors';
import Input from './Input';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useAppDispatch } from '../../../store';
import { authController } from '../../../store/controllers/auth.controller';
import { IAuth } from '../../../interfaces/user.interface';
import Button from '../../../components/Button';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/slices/auth.slice';
import Checkbox from 'expo-checkbox';
import { validationError } from '../../../utils';


const Login = () => {
  const [credentials, setCredentials] = useState<IAuth>();
  const [show, setShow] = useState<boolean>(true);
  const authState = useSelector(authSelector);
  const [isChecked, setChecked] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const dispatch = useAppDispatch();
  let rightIcon = show ? <Feather name="eye-off" onPress={() => setShow(false)} size={24} color="black" /> : <Feather name="eye" size={24} onPress={() => setShow(true)} color="black" />;

  const validation = (): boolean => {
    if (credentials?.username === "" || credentials?.username === undefined) {
      validationError('Username is required');
      return false;
    }
    if (credentials?.password === "" || credentials?.password === undefined) {
      validationError('Password is required');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validation()) dispatch(authController(credentials!));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.logoText}>basket</Text>
      </View>

      {/* Hero Text */}
      <View style={styles.heroTextContainter}>
        <Text style={styles.title}>Log into your account</Text>
        <Text style={styles.heroText}>Enter your email and password to access your account or create an account</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        <Input
          ref={emailRef}
          placeholder='Username'
          leftIcon={<SimpleLineIcons name="envelope" size={24} color={colors.primary} />}
          onSubmitEditing={() => passwordRef.current?.focus()}
          value={credentials?.username}
          onChangeText={username => setCredentials({ ...credentials, username })}
        />
        <Input
          ref={passwordRef}
          rightIcon={rightIcon}
          secureTextEntry={show}
          placeholder='Password'
          leftIcon={<Feather name="key" size={24} color={colors.primary} />}
          value={credentials?.password}
          onChangeText={password => setCredentials({ ...credentials!, password })}
        />
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? colors.secondary : undefined}
          />
          <Text style={styles.checkboxText}>Remember me</Text>
        </View>

        <Button
          title='Login'
          loading={authState.isLoading}
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
      <Pressable>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </Pressable>
      <Text>-- or continue with --</Text>

      {/* OAuth Container */}
      <View style={styles.oauthContainer}>
        <Pressable style={styles.oauthBtn}>
          <Image source={require('../../../assets/icons/facebook.png')} />
          <Text style={styles.oauthBtnText}>Facebook</Text>
        </Pressable>
        <Pressable style={styles.oauthBtn}>
          <Image source={require('../../../assets/icons/google.png')} />
          <Text style={styles.oauthBtnText}>Google</Text>
        </Pressable>
      </View>

      {/* Sign up */}
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <Pressable>
          <Text style={styles.signupText}>Sign Up</Text>
        </Pressable>
      </View>
      <StatusBar style='dark' />
    </ScrollView>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white'
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
    marginTop: 50,
    marginBottom: 20,
    rowGap: 20,
    alignItems: 'center'
  },
  heroText: {
    color: colors.secondary,
    fontWeight: '500',
    fontSize: 18,
    width: 270,
    lineHeight: 28,
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
    color: colors.secondary,
    fontWeight: '700'
  },
  form: {
    width: '100%',
    rowGap: 10,
    marginBottom: 30
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginTop: 10,
    marginBottom: 20
  },
  checkbox: {
  },
  checkboxText: {
    color: 'gray'
  },
  buttonContainer: {
    width: '70%'
  },
  button: {
    width: '85%',
    alignSelf: 'center',
    backgroundColor: colors.secondary
  },
  forgotPassword: {
    color: colors.primary,
    textDecorationLine: 'underline',
    marginBottom: 10,
    fontSize: 16
  },
  oauthContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    gap: 15,
    justifyContent: 'space-between'
  },
  oauthBtn: {
    borderWidth: 1,
    borderRadius: 8,
    flex: 0.8,
    paddingHorizontal: 6,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  oauthBtnText: {
    color: colors.secondary
  },
  signupContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10
  },
  signupText: {
    color: colors.primary
  }
})