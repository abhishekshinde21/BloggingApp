import React from 'react';
import { Button, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './screens/Home'
import Search from './screens/Search'
import Profile from './screens/Profile'

var MainScreenNavigator = TabNavigator({
  Home: {screen: Home},
  Search: {screen: Search},
  Profile: {screen: Profile}
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    // activeTintColor: 'white',
    activeBackgroundColor: 'white',
    labelStyle: {
      fontSize: 14,
      padding: 15
    }
  }

}
);

export default MainScreenNavigator;


// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//         <Text></Text>
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }