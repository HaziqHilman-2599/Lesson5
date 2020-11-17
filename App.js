/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

//import {Movielist} from './Movies';
import {Boatlist} from './Boats';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>GetABoat - For Sale</Text>
      <Boatlist />
    </ScrollView>
  );
};

export default App;
