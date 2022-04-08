import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailScreen from '../Details'
import HomeScreen from '../Home'
import ProfileScreen from '../ProfileScreen'
import ExploreScreen from '../ExploreScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createMaterialBottomTabNavigator();


const DetailsStack = createStackNavigator();
const HomeStack = createStackNavigator();


const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarColor: '#1f65ff',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'ProfileScreen',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'ExploreScreen',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-aperture" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#009387"
            },
            headerTintColor: {
                color: "#fff",
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff"
            }
        }}>
            <HomeStack.Screen name="Home" options={{
                headerLeft: () => (
                    <Icon.Button size={25} name="ios-menu" backgroundColor={"#009387"} onPress={() => {
                        navigation.openDrawer()
                    }}></Icon.Button>
                ),
            }} component={HomeScreen} />

        </HomeStack.Navigator>
    )
}

const DetailsStackScreen = ({ navigation }) => {
    return (<DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#1f65ff"
        },

        headerTintColor: {
            color: "#fff",
        },
        headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff"
        }
    }}>
        <DetailsStack.Screen name="Details" options={{
            headerLeft: () => (
                <Icon.Button size={25} name="ios-menu" backgroundColor={"#1f65ff"} onPress={() => {
                    navigation.openDrawer()
                }}></Icon.Button>
            ),
        }} component={DetailScreen} />
    </DetailsStack.Navigator>)
}
export default MainTabScreen

const styles = StyleSheet.create({})