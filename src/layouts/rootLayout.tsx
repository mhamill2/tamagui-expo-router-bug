import { Slot } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My New App</Text>
        <View style={styles.links}>
          <TouchableOpacity onPress={() => {}} style={styles.link}>
            <Text>Link 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.link}>
            <Text>Link 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.link}>
            <Text>MOBILE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f3f3f3' // Feel free to change the background color
  },
  title: {
    fontWeight: 'bold'
  },
  links: {
    flexDirection: 'row'
  },
  link: {
    marginLeft: 10
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RootLayout;
