import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import ResultsDetails from "./ResultsDetails"
import { withNavigation } from "react-navigation"

const ResultsList = ({ title, getResults, loading, navigation }) => {
 if (!getResults.length) {
  return null
 }

 return (
  <View style={styles.resultsContainer}>
   <Text style={styles.titleHeader}> {title} </Text>
   <FlatList
    horizontal
    data={getResults}
    keyExtractor={result => result.id}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => {
     return (
      <TouchableOpacity onPress={() => navigation.navigate("ResultInfoShow", { restaurant_id: item.id })}>
       <ResultsDetails data={item} />
      </TouchableOpacity>
     )
    }}
   />
  </View>
 )
}

const styles = StyleSheet.create({
 resultsContainer: {
  width: 400,
  marginBottom: 22,
 },
 titleHeader: {
  color: "#353b48",
  fontSize: 22,
  fontWeight: "bold",
  marginBottom: 8,
  marginLeft: 3,
 },
 noResultText: {
  fontSize: 18,
  textAlign: "center",
  color: "gray",
 },
})

// withNavigation will alow us to access the navigation App
export default withNavigation(ResultsList)
