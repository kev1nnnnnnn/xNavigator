import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Realiza a importação dos arquivos (paginas) que serão chamadas
import Contacts from './src/pages/Contacts/'
import Information from './src/pages/Information/'

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator >{/* DICA */}
       <Stack.Screen name="Contacts" component={Contacts}/>
       <Stack.Screen name="Information" component={Information}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}
