
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handlePasswordConfirmationChange = (text) => {
    setPasswordConfirmation(text);
  };

  const reg = () => {
    if (name === '') {
      Alert.alert('Harap di isi', 'Nama wajib di isi', [
        {
          text: 'Ok',
        },
      ]);
    } else if (email === '') {
      Alert.alert('Ups!', 'Email wajib di isi', [
        {
          text: 'Ok',
        },
      ]);
    } else if (
      email.split('@')[1] !== 'gmail.com' &&
      email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Harap di Isi', 'Menggunakan tanda @ ', [
        {
          text: 'Ok',
        },
      ]);
    } else if (password === '') {
      Alert.alert('Harap di isi', 'Password wajib di isi', [
        {
          text: 'Ok',
        },
      ]);
    } else if (password !== passwordConfirmation) {
      Alert.alert('Password Tidak Cocok', 'Password dan Konfirmasi Password tidak cocok', [
        {
          text: 'Ok',
        },
      ]);
    } else {
      // Lakukan proses registrasi di sini (misalnya, panggil API)
      // Simpan logika untuk mengecek email yang sudah terdaftar

      Alert.alert('Registrasi Berhasil', 'Silakan login.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/icon/cinematography-symbols-black-background.jpg')} // Ganti dengan path gambar yang sesuai
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', resizeMode: 'cover' }}
    >
      <View style={{ flexDirection: 'column', gap: 50, bottom: '10%' }}>
        <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Register</Text>
        <SafeAreaView style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', width: 250, borderRadius: 16 }}>
          <TextInput placeholder="Username" onChangeText={handleNameChange} />
        </SafeAreaView>
        {/* ...lanjutkan dengan komponen lainnya... */}
                    {/* == */}
                    <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            <TextInput placeholder='Email' onChangeText={handleEmailChange}/>
            </SafeAreaView>
            {/* == */}
            <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            <TextInput placeholder='Password' onChangeText={handlePasswordChange}/>
            </SafeAreaView>
            {/* == */}
            <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            <TextInput placeholder='PasswordConfirmation' onChangeText={handlePasswordConfirmationChange}/>
            </SafeAreaView>
            {/* +++ */}
            <TouchableOpacity  style={{backgroundColor:"rgba(255, 255, 255, 0.9)",height:40,justifyContent:"center",borderRadius:14}} onPress={reg}>
                <Text style={{textAlign:'center',fontSize:16,fontWeight:"bold",color:"black"}}>Register</Text>
            </TouchableOpacity>
            {/* +++ */}
            <SafeAreaView style={{position:"absolute",flexDirection:"row",top:"95%",backgroundColor:"rgba(255, 255, 255, 0.4)",borderRadius:5,gap:20,left:5}}>
                <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{color:"skyblue",fontSize:17,fontWeight:"bold"}}>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default Register;




















// import React from 'react';
// import { useState } from 'react';
// import { StyleSheet, ImageBackground, Text, View ,TextInput,TouchableOpacity} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const reg = () => {
//   const [name, setName] = useState<String>('');
//   const [email, setEmail] = useState<String>('');
//   const [password, setPassword] = useState<String>('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState<String>('');


//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   if (email === '') {
//     Alert.alert('Ups!', 'Email wajib di isi', [
//       {
//         text: 'Ok',
//       },
//     ]);
//   } else if (
//     email.split('@')[1] !== 'gmail.com' &&
//     email.split('@')[1] !== 'email.com'
//   ) {
//     Alert.alert('Harap di Isi', 'Menggunakan tanda @ ', [
//       {
//         text: 'Ok',
//       },
//     ]);
//   } else if (password === '') {
//     Alert.alert('Harap di isi', 'Password wajib di isi', [
//       {
//         text: 'Ok',
//       },
//     ]);
//   } else if (password !== passwordConfirmation) {
//     Alert.alert('Password Tidak Cocok', 'Password dan Konfirmasi Password tidak cocok', [
//       {
//         text: 'Ok',
//       },
//     ]);
//   } else if (name === '') {
//     Alert.alert('Harap di isi', 'Nama wajib di isi', [
//       {
//         text: 'Ok',
//       },
//     ]);
//   } else {
 
//    Alert.alert('Registrasi Berhasil', 'Silakan login.');
//   }
// };

// const Register = ({navigation}) => {

//   return (
//     <ImageBackground
//       source={require('../assets/icon/cinematography-symbols-black-background.jpg')} // Ganti dengan path gambar yang sesuai
//       style={{  flex: 1, justifyContent: 'center',alignItems: 'center',resizeMode: 'cover',}} >
//         {/* //\\ */}
//         <View style={{flexDirection:'column',gap:50,bottom:"10%"}}>
//             <Text style={{fontSize:35,color:'white',fontWeight:"bold",textAlign:"center"}}>Register</Text>
//             <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
//             <TextInput placeholder="Username" onChangeText={handleNameChange} />
//             </SafeAreaView>
            // {/* == */}
            // <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            // <TextInput placeholder='Email' />
            // </SafeAreaView>
            // {/* == */}
            // <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            // <TextInput placeholder='Password' />
            // </SafeAreaView>
            // {/* == */}
            // <SafeAreaView style={{ backgroundColor:"rgba(255, 255, 255, 0.5)",width:250,borderRadius:16}}>
            // <TextInput placeholder='PasswordConfirmation' />
            // </SafeAreaView>
            // {/* +++ */}
            // <TouchableOpacity  style={{backgroundColor:"rgba(255, 255, 255, 0.9)",height:40,justifyContent:"center",borderRadius:14}} onPress={reg}>
            //     <Text style={{textAlign:'center',fontSize:16,fontWeight:"bold",color:"black"}}>Register</Text>
            // </TouchableOpacity>
            // {/* +++ */}
            // <SafeAreaView style={{position:"absolute",flexDirection:"row",top:"95%",backgroundColor:"rgba(255, 255, 255, 0.4)",borderRadius:5,gap:20,left:5}}>
            //     <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Already have an account?</Text>
            //     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            //     <Text style={{color:"skyblue",fontSize:17,fontWeight:"bold"}}>Login</Text>
            //     </TouchableOpacity>
            // </SafeAreaView>
//         </View>
     
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
 
// }); 

// export default Register;

// ===