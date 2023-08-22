 
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(''); // Menggunakan useState biasa, tidak perlu destructuring assignment
  const [password, setPassword] = useState('');

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    if (email === '') {
      Alert.alert('Ups!', 'Email wajib di isi', [{ text: 'Ok' }]);
    } else if (email.split('@')[1] !== 'gmail.com' && email.split('@')[1] !== 'email.com') {
      Alert.alert('Ups', 'Email belum diisi', [{ text: 'Ok' }]);
    } else if (password === '') {
      Alert.alert('Ups!', 'Password harap di isi', [{ text: 'Ok' }]);
    } else if (password.length < 8) {
      Alert.alert('Ups!', 'Password harus lebih dari 8 karakter');
    } else {
      // Lakukan proses login di sini (misalnya, panggil API atau navigasi ke halaman berikutnya)
    }
  };

  // ... kode lainnya ...

  return (
    // ... kode lainnya ...

    <ImageBackground
      source={require('../assets/icon/cinematography-symbols-black-background.jpg')} // Ganti dengan path gambar yang sesuai
      style={{  flex: 1, justifyContent: 'center',alignItems: 'center',resizeMode: 'cover',}} >
        <View style={{flexDirection:'column',gap:50,bottom:"10%",}}>
            <Text style={{fontSize:35,color:'white',fontWeight:"bold",textAlign:"center"}}>Login</Text>
         
            <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            <TextInput placeholder='Email' onChangeText={handleEmail}/>
            </SafeAreaView>
            {/* == */}
            <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            <TextInput placeholder='Password' onChangeText={handlePassword}/>
            </SafeAreaView>
            {/* == */}
          
            <TouchableOpacity  style={{backgroundColor:"rgba(255, 255, 255, 0.9)",height:40,justifyContent:"center",borderRadius:14}} onPress={handleLogin}>
                <Text style={{textAlign:'center',fontSize:16,fontWeight:"bold",color:"black"}}>Login</Text>
            </TouchableOpacity>
            {/* +++ */}
            <SafeAreaView style={{position:"absolute",flexDirection:"row",top:"95%",backgroundColor:"rgba(255, 255, 255, 0.4)",borderRadius:5,gap:10,}}>
                <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Don't have an account yet?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{color:"skyblue",fontSize:15,fontWeight:"bold"}}>Register</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default Login;
