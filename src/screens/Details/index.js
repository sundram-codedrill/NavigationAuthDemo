import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DetailScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, marginBottom: 5, justifyContent: "space-evenly", alignItems: "center" }}>
            <TouchableOpacity onPress={() => { navigation.goBack("Back") }}>
                <View style={{ backgroundColor: "#1f65ff", width: 180, borderRadius: 20, height: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff" }}>{`Back`}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <View style={{ backgroundColor: "#1f65ff", width: 180, borderRadius: 20, height: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff" }}>Pop Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <View style={{ backgroundColor: "#1f65ff", width: 180, borderRadius: 20, height: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff", textAlign: "center" }}>Go to Home Screen Screen</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Details") }}>
                <View style={{ backgroundColor: "#1f65ff", width: 180, borderRadius: 20, height: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff" }}>Details Screen</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})