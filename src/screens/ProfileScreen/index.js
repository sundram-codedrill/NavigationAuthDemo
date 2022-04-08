import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <TouchableOpacity >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Profile Screen</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})