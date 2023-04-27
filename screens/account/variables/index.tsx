import { Ionicons, FontAwesome5, Entypo, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../utils/colors';

export type listItem = {
  name: string,
  path: string,
  icon: React.ReactNode
}

export const accountList: listItem[] = [
  {
    name: 'Notification',
    path: 'notification',
    icon: <Ionicons name="notifications" size={24} color={colors.primary} />
  },
  {
    name: 'Edit Profile',
    path: 'profile',
    icon: <FontAwesome5 name="user-edit" size={24} color={colors.primary} />
  },
  {
    name: 'Wishlist',
    path: 'wishlist',
    icon: <Entypo name="star" size={24} color={colors.primary} />
  },
  {
    name: 'Order history',
    path: 'history',
    icon: <Ionicons name="receipt" size={24} color={colors.primary} />
  },
  {
    name: 'Track order',
    path: 'track',
    icon: <FontAwesome5 name="firefox" size={24} color={colors.primary} />
  },
  {
    name: 'Payment option',
    path: 'paymentOption',
    icon: <MaterialIcons name="payment" size={24} color={colors.primary} />
  },
  {
    name: 'Settings',
    path: 'settings',
    icon: <Feather name="settings" size={24} color={colors.primary} />
  },
  {
    name: 'Log out',
    path: 'logout',
    icon: <MaterialCommunityIcons name="logout" size={24} color={colors.primary} />
  },
]