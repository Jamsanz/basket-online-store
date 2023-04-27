import { Pressable, StyleSheet, Image, Text, View, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import colors from '../../utils/colors';
import { accountList } from './variables';
import { useAppDispatch } from '../../store';
import { logOut } from '../../store/slices/authFlow.slice';
import { IUser } from '../../interfaces/user.interface';
import { AsyncGetItem } from '../../utils';

const Account = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IUser>();

  const handleClick = (path: string) => {
    if (path === "logout") {
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
  };

  useLayoutEffect(() => {
    AsyncGetItem('user').then((res) => {
      setUser(res);
    }).catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.info}>
          <Image source={{ uri: user?.image }} style={styles.infoImage} />
          <View>
            <Text style={styles.infoTitle}>{user?.firstName + " " + user?.lastName}</Text>
            <Text style={styles.infoText}>{user?.email}</Text>
          </View>
        </View>
        <View style={styles.curve}></View>
      </View>
      <View style={styles.listCard}>
        {
          accountList.map((item, index) =>
            <Pressable key={index} style={styles.listItem} onPress={() => handleClick(item.path)}>
              {item.icon}
              <Text style={styles.listItemText}>{item.name}</Text>
            </Pressable>
          )
        }
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  banner: {
    backgroundColor: colors.primary,
    flex: 0.5,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
    marginLeft: 20
  },
  infoTitle: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: 18
  },
  infoText: {
    color: colors.secondary
  },
  infoImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  curve: {
    position: 'absolute',
    height: 100,
    width: '100%',
    borderRadius: 30,
    bottom: -50,
    backgroundColor: 'white'
  },
  listCard: {
    width: '90%',
    marginTop: -140,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
    backgroundColor: 'white',
    borderRadius: 15
  },
  listItem: {
    width: '50%',
    flexDirection: 'row',
    columnGap: 40
  },
  listItemText: {
    color: colors.secondary,
    fontSize: 18
  }
})