import React, { useState } from "react"
import { View, ScrollView, Text, StyleSheet } from "react-native"
import ResultsList from "../components/ResultsList"
import SearchBar from "../components/SearchBar"

import useResult from "../hooks/useResult"

const MainScreen = () => {
 const [searchText, setSearchText] = useState("")
 const [results, loading, searchMessage, errorMessage, searchApi] = useResult(searchText)

 //  "price": "$", // Cheap Restaurants
 //  "price": "$$", // Affordable Restaurants
 //  "price": "$$$", // Fancy Restaurants
 const filterResultByPrice = price => {
  return results.filter(result => {
   return result.price === price
  })
 }

 return (
  // <View style={styles.mainAppContainer}>
  <>
   <SearchBar searchText={searchText} onSearchTextChange={setSearchText} onSearchTextSubmit={() => searchApi(searchText)} />
   {/* <Text style={styles.text}> Restaurant Name: {searchText} </Text> */}
   <Text style={[styles.text, styles.textCenter]}> {searchMessage}</Text>
   {errorMessage ? <Text style={[styles.errorText]}>{errorMessage}</Text> : null}
   {/* the following are our results  */}
   {loading ? (
    <Text style={styles.contentLoading}> Loading . . .</Text>
   ) : (
    <ScrollView>
     <ResultsList title="Cheap Restaurants" getResults={filterResultByPrice("$")} />
     <ResultsList title="Affordable Restaurants" getResults={filterResultByPrice("$$")} />
     <ResultsList title="Fancy Restaurants" getResults={filterResultByPrice("$$$")} />
    </ScrollView>
   )}
  </>
  // </View>
 )
}

const styles = StyleSheet.create({
 mainAppContainer: {
  flex: 1,
  // Or
  // height: "100%",
 },
 text: {
  color: "gray",
  fontSize: 15,
  borderBottomWidth: 1,
  borderBottomColor: "#b2bec3",
  borderStyle: "dotted",
  paddingBottom: 6,
  marginHorizontal: 70,
 },
 textCenter: {
  fontSize: 17,
  textAlign: "center",
  marginBottom: 20,
 },
 errorText: {
  textAlign: "center",
  fontSize: 15,
  color: "red",
  marginTop: 0,
 },
 contentLoading: {
  fontSize: 22,
  textAlign: "center",
  color: "gray",
  paddingBottom: 6,
  marginVertical: 70,
 },
})

export default MainScreen
