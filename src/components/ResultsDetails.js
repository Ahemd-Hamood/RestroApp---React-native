import React from "react"

import { View, Text, StyleSheet, Image } from "react-native"

const ResultsDetails = ({ data }) => {
 return (
  <View style={styles.ItemContainer}>
   <Image style={styles.ImageItemStyle} source={{ uri: data.image_url }} />
   <Text style={styles.ItemName}>{data.name}</Text>
   <Text style={styles.ItemSubName}>
    {data.rating} Stars, {data.review_count} Reviews
   </Text>
  </View>
 )
}

const styles = StyleSheet.create({
 ItemContainer: {
  marginLeft: 8,
 },
 ImageItemStyle: {
  width: 250,
  height: 120,
  borderRadius: 5,
 },
 ItemName: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#2d3436",
  marginTop: 6,
  marginBottom: 3,
 },
 ItemSubName: {
  fontSize: 12,
  fontWeight: "bold",
  color: "#636e72",
 },
})

export default ResultsDetails

/* 
[
  {
    "alias": "paesano-ristorante-italiano-san-jose",
    "categories":  [
      {
        "alias": "italian",
        "title": "Italian",
      },
    ],
    "coordinates": {
      "latitude": 37.336166540678,
      "longitude": -121.89867135144,
    },
    "display_phone": "(408) 217-9327",
    "distance": 2497.5070746721076,
    "id": "zLViW6kDKNLIYsGkBCNorg",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/oDYRK0KAZ7Le47ZhDDt0ag/o.jpg",
    "is_closed": false,
    "location": {
      "address1": "350 W Julian St",
      "address2": "Ste 1",
      "address3": "",
      "city": "San Jose",
      "country": "US",
      "display_address": [
        "350 W Julian St",
        "Ste 1",
        "San Jose, CA 95110",
      ],
      "state": "CA",
      "zip_code": "95110",
    },
    "name": "Paesano Ristorante Italiano",
    "phone": "+14082179327",
    "price": "$$",
    "rating": 4,
    "review_count": 1159,
    "transactions": [
      "delivery",
    ],
    "url": "https://www.yelp.com/biz/paesano-ristorante-italiano-san-jose?adjust_creative=MIXzuPi0nqd2FzWAPNLKBw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=MIXzuPi0nqd2FzWAPNLKBw",
  },

// Ends here 


 {
    "alias": "bertucellis-la-villa-san-jose",
    "categories": [
     {
        "alias": "sandwiches",
        "title": "Sandwiches",
      },
     {
        "alias": "italian",
        "title": "Italian",
      },
    ],
    "coordinates": {
      "latitude": 37.30458,
      "longitude": -121.89858,
    },
    "display_phone": "(408) 295-7851",
    "distance": 1779.8327220681333,
    "id": "Q7OkRjnqIJmeZJHCnbnIcA",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/B05XRqHtuEe4TRXYRqJH0g/o.jpg",
    "is_closed": false,
    "location": {
      "address1": "1319 Lincoln Ave",
      "address2": "",
      "address3": "",
      "city": "San Jose",
      "country": "US",
      "display_address": [
        "1319 Lincoln Ave",
        "San Jose, CA 95125",
      ],
      "state": "CA",
      "zip_code": "95125",
    },
    "name": "Bertucelli's La Villa",
    "phone": "+14082957851",
    "price": "$$",
    "rating": 4.5,
    "review_count": 1205,
    "transactions": [
      "pickup",
      "delivery",
    ],
    "url": "https://www.yelp.com/biz/bertucellis-la-villa-san-jose?adjust_creative=MIXzuPi0nqd2FzWAPNLKBw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=MIXzuPi0nqd2FzWAPNLKBw",
  },
  .....................................
  .....................................
  .....................................
  .....................................
  .....................................
]
*/
