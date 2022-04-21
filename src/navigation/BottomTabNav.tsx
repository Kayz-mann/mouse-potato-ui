import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';

import ExploreIcon from '../../svg/ExploreIcon';
import HomeIcon from '../../svg/HomeIcon';
import NotificationIcon from '../../svg/NotificationIcon';
import ProfileIcon from '../../svg/ProfileIcon';
import theme, { Box } from '../components/Theme';
import HomeNav from './HomeNav';

export type BottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Notification: undefined;
  Profile: undefined;
}


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  return (
    <>
      <BottomTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme.colors.primary1,
      headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarIcon: ({color}) => (
            <Box style={{ padding: 10 }}>
              <HomeIcon color={color} />
            </Box>
          ),
          tabBarShowLabel: false,
          unmountOnBlur: true,
          }}
          listeners={() => ({
            tabPress: () =>
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
          })}
      />

      <BottomTab.Screen
        name="Explore"
        component={HomeNav}
        options={{
          tabBarIcon: ({color}) => (
            <Box style={{ padding: 10 }}>
              <ExploreIcon color={color} />
            </Box>
          ),
          tabBarShowLabel: false,
        }}
        listeners={() => ({
          tabPress: () =>
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
        })}
      />

      <BottomTab.Screen
        name="Notification"
        component={HomeNav}
        options={{
          tabBarIcon: ({color}) => (
            <Box style={{ padding: 10 }}>
              <NotificationIcon color={color} />
            </Box>
          ),
          tabBarShowLabel: false,
        }}
        listeners={() => ({
          tabPress: () =>
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={HomeNav}
        options={{
          tabBarIcon: ({color}) => (
            <Box style={{ padding: 10 }}>
              <ProfileIcon color={color} />
            </Box>
          ),
          tabBarShowLabel: false,
        }}
        listeners={() => ({
          tabPress: () =>
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
        })}
      />
    </BottomTab.Navigator>
    </>
  );
}
