import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => { navigation.navigate("Details") }}>
        <View style={{ backgroundColor: "#009387", width: 180, borderRadius: 20, height: 50, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>Go to Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})