import {
  AntDesign, EvilIcons, Entypo, Ionicons, FontAwesome5
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../../utils/colors';
import Header from '../../../components/Header';
import { StyleSheet } from 'react-native';
import Home from '../../home';
import Saved from '../../saved';
import Account from '../../account';
import Cart from '../../cart';

const AuthenticatedNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FE6F1E',
        header: (props) => <Header {...props} />,
        tabBarStyle: {
          paddingVertical: 5
        }
      }}
      initialRouteName='Accounts'
    >
      <Tab.Screen
        name='Home'
        options={{
          tabBarIcon: ({ focused }) => <AntDesign name='home' color={focused ? colors.primary : 'black'} size={24} />
        }}
        component={Home}
      />
      <Tab.Screen
        name='Saved'
        options={{
          tabBarIcon: ({ focused }) => <EvilIcons name='star' color={focused ? colors.primary : 'black'} size={24} />
        }}
        component={Saved}
      />
      <Tab.Screen
        name='Accounts'
        options={{
          tabBarIcon: ({ focused }) => <AntDesign name='user' color={focused ? colors.primary : 'black'} size={24} />
        }}
        component={Account}
      />
      <Tab.Screen
        name='Cart'
        options={{
          tabBarIcon: ({ focused }) => <EvilIcons name="cart" style={styles.rotate} color={focused ? colors.primary : 'black'} size={24} />
        }}
        component={Cart}
      />

    </Tab.Navigator>
  )

};

export default AuthenticatedNavigator;

const styles = StyleSheet.create({
  rotate: {
  }
})