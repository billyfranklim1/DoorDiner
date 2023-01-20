import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuScreen from './src/screens/MenuScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Home(params) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'ios-cart' : 'ios-cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false, title: 'Cardápio' }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false, title: 'Carrinho' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => <Ionicons name="ios-home" size={18} />,
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: () => (
              <Ionicons name="ios-information-circle" size={18} />
            ),
          }}
        />

        <Drawer.Screen
          name="Logout"
          component={AboutScreen}
          options={{
            drawerIcon: () => <Ionicons name="ios-log-out" size={18} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
