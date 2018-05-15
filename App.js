import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles/grid'
import { Stack Navigator, } from 'react-navigation'; // used to navigate between screens
import Login from './screens/Login/login'

// export default class App extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </Container>
//     );
//   }
// }

export default StackNavigator({
  Login: {
    screen: 
    navigationOptions: {
      title: 'Login'
    }
  }
});
