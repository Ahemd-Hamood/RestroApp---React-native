import { useEffect, useState } from "react"
import yelp_api from "../api/yelp_api"

export default searchText => {
 const [results, setResults] = useState([])
 const [searchMessage, setSearchMessage] = useState("Start your Search 😋")
 const [errorMessage, setErrorMessage] = useState("")
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  searchApi("food", true)
 }, [])

 console.log("##############################################")
 console.log(searchText)

 const searchApi = async (term, isDefaultSearch = false) => {
  if (searchText != "" || isDefaultSearch) {
   setResults([])
   setErrorMessage("")
   setLoading(true)
   setSearchMessage(`${isDefaultSearch ? "Loading" : `Searching for "${searchText}" - `} please wait .....`)
   try {
    // ---------------- API Request start Here --------------------
    const response = await yelp_api.get("/search", {
     // Here we append parameter into the requested URL
     params: {
      limit: 40, // "/search?term=my_search&limit=50"
      term, // "/search?term=50"
      location: "san jose", // "/search?term=50?location=san%20jose"
     },
    })
    // ------------------- API Request ends here ----------------------------

    setResults(response.data.businesses)
    setSearchMessage(`We have Found ${results.length} Places 4 U`)
    setLoading(false)
    console.log(results.length)
   } catch (error) {
    console.log("Error: ", error)
    setSearchMessage("- Server Error 400 -")
    setErrorMessage("Please Try Later")
    setErrorMessage(false)
   }
  } else {
   console.log("search is empty")
   setSearchMessage("Please Type Something 😡")
   setLoading(false)
  }
 }

 return [results, loading, searchMessage, errorMessage, searchApi]
}
