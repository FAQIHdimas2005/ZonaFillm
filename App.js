
import React from 'react';
import { View, StyleSheet } from 'react-native';
import IndexNav from './router/IndexNav';
import { Register } from './src/screen';

const App = () => {
  return (
    <View style={{flex:1}}>
      <IndexNav/>
{/* <Register/> */}
    </View>
  );
}

export default App;
