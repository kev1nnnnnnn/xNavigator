import React from 'react';
// Stack, Drawer, Tab
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Realiza a importação dos arquivos (paginas) que serão chamadas
import AppContacts from './src/pages/AppContacts/';
import Contacts from './src/pages/Contacts/';
import Information from './src/pages/Information/';

import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator >
       <Tab.Screen name="Contatos app" component={AppContacts}/>
       <Tab.Screen name="Contacts" component={Contacts}/>
     </Tab.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator >{/* DICA */}
       <Stack.Screen name="Contatos" component={Tabs}/>
       <Stack.Screen name="Information" component={Information}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  


})
