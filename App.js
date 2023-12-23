import { StyleSheet, View } from 'react-native';
import React from 'react';
import HomeScreen from './screens/UserEnd/HomeScreen';
import Catalog from './screens/UserEnd/Catalog';

const App = () => {
  return (
    <View>
      <Catalog />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});