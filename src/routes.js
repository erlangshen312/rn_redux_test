import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './screens/dashboard/Dashboard';
import News from './screens/news/News';
import NewsDetails from './screens/news/NewsDetails';
import Profile from './screens/profile/Profile';

const NewsStack = createStackNavigator();
export const NewsStackScreen = () => (
  <NewsStack.Navigator>
    <NewsStack.Screen
      name="News"
      component={News}
      options={{
        headerShown: false,
        animationEnabled: false,
      }}
    />
    <NewsStack.Screen
      name="Details"
      component={NewsDetails}
      options={{
        animationEnabled: false,
      }}
    />
  </NewsStack.Navigator>
);

const TabStack = createBottomTabNavigator();
export const TabStackRoutes = () => (
  <TabStack.Navigator
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      tabStyle: {
        backgroundColor: '#fff',
        paddingBottom: 5,
        paddingTop: 5,
      },
    }}>
    <TabStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Dashboard',
      }}
    />
    <TabStack.Screen
      name="News"
      component={NewsStackScreen}
      options={{
        tabBarLabel: 'News',
      }}
    />
    <TabStack.Screen
      name={'Profile'}
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
      }}
    />
  </TabStack.Navigator>
);
