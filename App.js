import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FormScreen from './src/screens/FormScreen';
import HelpScreen from './src/screens/HelpScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';

const Navigation = createStackNavigator(
  {
        Home: HomeScreen,
        Order: OrderScreen,
        Form: FormScreen,
        Help: HelpScreen,
  },
  {
        initialRouteName: "Home",
        defaultNavigationOptions: 
        {
          
            title: "App",
            //header : null,
            headerTitleStyle: {
              textAlign: 'left',
              fontSize: 30,            
          }
        }
  }
);
export default createAppContainer(Navigation);