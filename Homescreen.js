// import React, { useState } from 'react'; // Perlu mengimpor useState dari react
// import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import { StatusBar } from 'react-native';
// import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import FilmTrending from '../components/FilmTrending';

// const android = Platform.OS === 'android';

// const Homescreen = () => {
//   const [trending, setTrending] = useState([1, 2, 3]);    // Menggunakan useState
//   return (
//     <View style={{ backgroundColor: "black", flex: 1 }}>
//       <SafeAreaView className={android ? "mb-2" : "mb-3"}>
//         <StatusBar styles="light" />
//         <View style={{ flexDirection: "row", justifyContent: "center", gap: 107 }}>
//           <Bars3CenterLeftIcon size="38" strokeWidth={2} color='white' />
//           <Text style={{ fontSize: 35, color: 'white' }}>
//             <Text style={{ color: 'red' }}>M</Text>ovie
//           </Text>
//           <TouchableOpacity>
//             <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//       <ScrollView showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 10 }}>
//         <FilmTrending data={trending} />
//       </ScrollView>
//     </View>
//   );
// };

// export default Homescreen;
// const styles = StyleSheet.create({});




import React, { useState } from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilmTrending from '../components/FilmTrending';

const android = Platform.OS === 'android';

const Homescreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <SafeAreaView style={android ? { marginBottom: 2 } : { marginBottom: 3 }}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 107,
            alignItems: 'center',
          }}
        >
          <Bars3CenterLeftIcon size={38} strokeWidth={2} color="white" />
          <Text style={{ fontSize: 35, color: 'white' }}>
            <Text style={{ color: 'red' }}>M</Text>ovie
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <FilmTrending data={trending} />
      </ScrollView>
    </View>
  );
};

export default Homescreen;
