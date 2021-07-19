import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ClientMedicine from './src/screens/ClientMedicine';
import ClientOrderHistory from './src/screens/ClientOrderHistory';
import Delivery from './src/screens/Delivery';
import DeliveryPreference from './src/screens/DeliveryPreference';
import DriverMedicine from './src/screens/DriverMedicine';
import FormScreen from './src/screens/FormScreen';
import HelpScreen from './src/screens/HelpScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';
import Popup from './src/screens/Popup';
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
        Client: ClientMedicine,
        Delivery2: DeliveryPreference,
        Popup: Popup,
        Client2: ClientOrderHistory,
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