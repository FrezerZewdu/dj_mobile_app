import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <SafeAreaView style={tw`flex flex-col justify-center items-center w-full`}>
      <View style={tw`flex flex-col justify-center items-center w-full`}>
        <Text>Open up App.js to start working on your app!</Text>
        <view style={tw`bg-blue-300 h-11 w-full`}></view>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
