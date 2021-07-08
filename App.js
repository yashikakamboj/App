import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Delivery from './src/screens/Delivery';
import DriverMedicine from './src/screens/DriverMedicine';
import FormScreen from './src/screens/FormScreen';
import HelpScreen from './src/screens/HelpScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';
import Time from './src/screens/Time';

const Navigation = createStackNavigator(
  {
        Home: HomeScreen,
        Order: OrderScreen,
        Form: FormScreen,
        Help: HelpScreen,
        Time: Time,
        Delivery: Delivery,
        Driver: DriverMedicine,
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