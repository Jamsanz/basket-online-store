import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { IAuthFlow, authFlowSelector, logOut, login } from '../../store/slices/authFlow.slice';
import { AsyncGetItem } from '../../utils';
import Loading from '../../components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedNavigator from './components/AuthenticatedNavigator';
import UnAuthicatedNavigator from './components/UnAuthenticatedNavigator';
import { StatusBar } from 'expo-status-bar';

const MainContainer = () => {
  const authState = useSelector<RootState, IAuthFlow>(authFlowSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    AsyncGetItem('token').then(res => {
      if (res.length > 1) dispatch(login());
    }).catch(_ => dispatch(logOut()))
  }, []);

  if (authState.isLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {
        authState.signedIn ? <AuthenticatedNavigator /> : <UnAuthicatedNavigator />
      }
    </NavigationContainer>
  )
}

export default MainContainer;

const styles = StyleSheet.create({})