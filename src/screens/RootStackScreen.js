// import React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';



// const RootStack = createStackNavigator();

// const RootStackScreen = ({ navigation }) => (
//     <RootStack.Navigator headerMode='none'>
//         <RootStack.Screen name="SplashScreen" component={SplashScreen} />
//         <RootStack.Screen name="SignInScreen" component={SignInScreen} />
//         <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
//     </RootStack.Navigator>
// );

// export default RootStackScreen;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootStackScreen = () => {
    return (
        <View>
            <Text>RootStackScreen</Text>
        </View>
    )
}

export default RootStackScreen

const styles = StyleSheet.create({})