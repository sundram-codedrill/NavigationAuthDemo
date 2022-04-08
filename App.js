import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MainTabScreen from './src/screens/MainTabScreen'


import { DrawerContent } from './src/screens/DrawerContent';


const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      {/* drawerContent={props => <DrawerContent {...props} */}
      <Drawer.Navigator

        drawerContent={props => <DrawerContent {...props} />}

        screenOptions={{ headerShown: false }}>

        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})








// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Home from './src/screens/Home';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Details from './src/screens/Details';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();
// const App = () => {
//   const Stack = createNativeStackNavigator();
//   return (

//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Details" component={Details} />
//       </Drawer.Navigator>

//     </NavigationContainer>

//   )
// }

// export default App

// const styles = StyleSheet.create({})