// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import { Text } from 'tamagui';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text hoverStyle={{ color: 'red' }}>
//         Open up <Text hoverStyle={{ color: 'blue' }}>App.js</Text> to start
//         working on your app!
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up <Text>App.js</Text> to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
