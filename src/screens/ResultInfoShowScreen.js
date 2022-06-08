import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import yelp_api from "../api/yelp_api"

const ResultInfoShowScreen = ({ navigation }) => {
 const [result, setResult] = useState(null)
 const id = navigation.getParam("restaurant_id")

 console.log(result)

 const getResult = async id => {
  const response = await yelp_api.get(`${id}`)
  setResult(response.data)
  setLastId(result.id)
 }

 useEffect(() => {
  getResult(id)
 }, [])

 if (!result) {
  return null
 }

 return (
  <>
   <Text style={styles.textStyle}> Restaurant Name: {result.name}</Text>
   <Text style={styles.textStyle}> Restaurant Phone No. : {result.display_phone}</Text>
   {/* ---------------------------------------------------------------------------------- */}
   <FlatList
    data={result.photos}
    keyExtractor={result => result}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => {
     return <Image style={styles.ImageItemStyle} source={{ uri: item }} />
    }}
   />
  </>
 )
}

const styles = StyleSheet.create({
 textStyle: {
  fontSize: 22,
  marginBottom: 12,
 },
 ImageItemStyle: {
  marginHorizontal: 5,
  marginBottom: 18,
  height: 350,
  borderRadius: 5,
 },
})

export default ResultInfoShowScreen

//  {
//   "alias": "sj-omogari-san-jose-3",
//   "categories": [
//      {
//       "alias": "korean",
//       "title": "Korean",
//     },
//      {
//       "alias": "soup",
//       "title": "Soup",
//     },
//      {
//       "alias": "seafood",
//       "title": "Seafood",
//     },
//   ],
//   "coordinates":  {
//     "latitude": 37.348433,
//     "longitude": -121.895124,
//   },
//   "display_phone": "(408) 288-8134",
//   "hours": [
//      {
//       "hours_type": "REGULAR",
//       "is_open_now": false,
//       "open": [
//          {
//           "day": 0,
//           "end": "1500",
//           "is_overnight": false,
//           "start": "1130",
//         },
//          {
//           "day": 0,
//           "end": "2100",
//           "is_overnight": false,
//           "start": "1700",
//         },
//          {
//           "day": 1,
//           "end": "1500",
//           "is_overnight": false,
//           "start": "1130",
//         },
//          {
//           "day": 1,
//           "end": "2100",
//           "is_overnight": false,
//           "start": "1700",
//         },
//          {
//           "day": 2,
//           "end": "1500",
//           "is_overnight": false,
//           "start": "1130",
//         },
//          {
//           "day": 2,
//           "end": "2100",
//           "is_overnight": false,
//           "start": "1700",
//         },
//          {
//           "day": 3,
//           "end": "1500",
//           "is_overnight": false,
//           "start": "1130",
//         },
//          {
//           "day": 3,
//           "end": "2100",
//           "is_overnight": false,
//           "start": "1700",
//         },
//          {
//           "day": 4,
//           "end": "1500",
//           "is_overnight": false,
//           "start": "1130",
//         },
//          {
//           "day": 4,
//           "end": "2100",
//           "is_overnight": false,
//           "start": "1700",
//         },
//          {
//           "day": 5,
//           "end": "2100",
//           "is_overnight": false,
//           "start": "1130",
//         },
//       ],
//     },
//   ],
//   "id": "UPjhJoqpbJr0u8mvTOxneQ",
//   "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/gYbSSjjiw14kYUGWHswQGQ/o.jpg",
//   "is_claimed": true,
//   "is_closed": false,
//   "location":  {
//     "address1": "154 Jackson St",
//     "address2": "",
//     "address3": "",
//     "city": "San Jose",
//     "country": "US",
//     "cross_streets": "",
//     "display_address": [
//       "154 Jackson St",
//       "San Jose, CA 95112",
//     ],
//     "state": "CA",
//     "zip_code": "95112",
//   },
//   "name": "SJ Omogari",
//   "phone": "+14082888134",
//   "photos": [
//     "https://s3-media2.fl.yelpcdn.com/bphoto/gYbSSjjiw14kYUGWHswQGQ/o.jpg",
//     "https://s3-media1.fl.yelpcdn.com/bphoto/2ViTG0irrqFt6e4NkXHlYw/o.jpg",
//     "https://s3-media3.fl.yelpcdn.com/bphoto/dy-D1tOVOro39poDDTvIGw/o.jpg",
//   ],
//   "price": "$$",
//   "rating": 4,
//   "review_count": 2235,
//   "transactions": [
//     "delivery",
//     "pickup",
//   ],
//   "url": "https://www.yelp.com/biz/sj-omogari-san-jose-3?adjust_creative=MIXzuPi0nqd2FzWAPNLKBw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=MIXzuPi0nqd2FzWAPNLKBw",
// }
