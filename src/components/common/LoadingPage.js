import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image } from 'react-native';
import tailwind from 'twrnc';

const LoadingScreen = () =>{
    return (
        <view style={tailwind`flex flex-col items-center justify-center h-full w-full bg-[#0E2954]`}>
            <Image style={{width: 150, height: 150}} source={require('../../../assets/images/draft_2.png')} />
        </view>
    )
    
}
export default LoadingScreen