import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { View, TextInput, StyleSheet } from "react-native"

const SearchBar = ({ searchText, onSearchTextChange, onSearchTextSubmit }) => {
 return (
  <View style={styles.SearchContainer}>
   <AntDesign name="search1" style={styles.iconStyle} color="gray" />
   <TextInput style={styles.textInput} placeholder="Search..." value={searchText} onChangeText={onSearchTextChange} onEndEditing={onSearchTextSubmit} autoCapitalize="none" autoCorrect={false} />
  </View>
 )
}

const styles = StyleSheet.create({
 SearchContainer: {
  backgroundColor: "#dfe6e9",
  borderColor: "#c7ecee",
  borderWidth: 1,
  borderRadius: 8,
  height: 45,
  marginHorizontal: 8,
  marginVertical: 20,
 
  paddingHorizontal: 6,
  // flex styling
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
 },
 iconStyle: {
  fontSize: 22,
  // alignSelf: "center"
 },
 textInput: {
  flex: 1,
  color: "#353b48",
  fontSize: 20,
  marginLeft: 8,
 },
})

export default SearchBar
