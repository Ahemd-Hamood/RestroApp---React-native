import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import MainScreen from "./src/screens/MainScreen"
import ResultInfoShowScreen from "./src/screens/ResultInfoShowScreen"

const navigator = createStackNavigator(
 {
  Main: MainScreen,
  ResultInfoShow: ResultInfoShowScreen,
 },
 {
  initialRouteName: "Main",
  defaultNavigationOptions: {
   title: "RestoApp",
  },
 }
)

export default createAppContainer(navigator)
