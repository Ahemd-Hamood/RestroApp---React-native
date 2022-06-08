import axios from "axios"
import { API_Authorization } from "@env"

// A. create an axios instance for all future api requests

export default axios.create({
 baseURL: "https://api.yelp.com/v3/businesses",
 headers: {
  Authorization: `Bearer ${API_Authorization}`,
 },
})

// Client ID
// MIXzuPi0nqd2FzWAPNLKBw

// API Key
// 3Yk1jXy5tJuYtUDADgIwA9R45_3eEiQD63bT_IMxc8L5ck19I7MAao5zNb-RHFUTzApOlqmZry9h3gt-GuqF_Or80TYzA0oNElgHZWfyUIr5k-Vfnfkrqu4ABstyYnYx

// # Search Request :-
// GET https://api.yelp.com/v3/businesses/search

// param as query string:
// term=coffee - search name
// location=NYC - search location

// # Get Business Details :-
// GET https://api.yelp.com/v3/businesses/{id}

/*
Array [
  Object {
    "alias": "paesano-ristorante-italiano-san-jose",
    "categories": Array [
      Object {
        "alias": "italian",
        "title": "Italian",
      },
    ],
    "coordinates": Object {
      "latitude": 37.336166540678,
      "longitude": -121.89867135144,
    },
    "display_phone": "(408) 217-9327",
    "distance": 2497.5070746721076,
    "id": "zLViW6kDKNLIYsGkBCNorg",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/oDYRK0KAZ7Le47ZhDDt0ag/o.jpg",
    "is_closed": false,
    "location": Object {
      "address1": "350 W Julian St",
      "address2": "Ste 1",
      "address3": "",
      "city": "San Jose",
      "country": "US",
      "display_address": Array [
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
    "transactions": Array [
      "delivery",
    ],
    "url": "https://www.yelp.com/biz/paesano-ristorante-italiano-san-jose?adjust_creative=MIXzuPi0nqd2FzWAPNLKBw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=MIXzuPi0nqd2FzWAPNLKBw",
  },

// Ends here 


  Object {
    "alias": "bertucellis-la-villa-san-jose",
    "categories": Array [
      Object {
        "alias": "sandwiches",
        "title": "Sandwiches",
      },
      Object {
        "alias": "italian",
        "title": "Italian",
      },
    ],
    "coordinates": Object {
      "latitude": 37.30458,
      "longitude": -121.89858,
    },
    "display_phone": "(408) 295-7851",
    "distance": 1779.8327220681333,
    "id": "Q7OkRjnqIJmeZJHCnbnIcA",
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/B05XRqHtuEe4TRXYRqJH0g/o.jpg",
    "is_closed": false,
    "location": Object {
      "address1": "1319 Lincoln Ave",
      "address2": "",
      "address3": "",
      "city": "San Jose",
      "country": "US",
      "display_address": Array [
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
    "transactions": Array [
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
