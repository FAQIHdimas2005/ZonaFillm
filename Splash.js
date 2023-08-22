import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Homescreen from './Homescreen';

const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate("Register");
    }, 1000);
  return (
    <View style={{backgroundColor:"skyblue",flex:1}}>
 <View style={{justifyContent:"center",alignSelf:"center",flexDirection:"column",top:"35%"}}>
    <Image style={{width:90,height:90,alignSelf:"center"}} source={require("../assets/icon/Movie.png")}/>
    <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>ZonaFilm</Text>
 </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
 
export default Splash;


{/* <Text>Splash</Text>
<Button
  title="Go to Homescreen"
  onPress={() => navigation.navigate('Homescreen')} // Navigasi ke halaman Homescreen
/> */}