import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image, TextInput } from 'react-native';
import tailwind from 'twrnc';

const LoginScreen = () =>{
    return (
        <view style={tailwind`flex flex-col items-center justify-center h-full w-full bg-[#0E2954]`}>
            <view style={tailwind`flex flex-col rounded-md shadow-lg pt-5 pb-6 px-4 `}>
                <text style={tailwind`text-xl text-white font-semibold`}>Login</text>
                <view style={tailwind`w-full mt-4 flex`}>
                    <text style={tailwind`basis-1/4 text-lg text-slate-50`}>Email:</text>
                    <TextInput style={tailwind`basis-3/4 ml-2 rounded bg-transparent border border-white`}/>
                </view>
                <view style={tailwind`w-full mt-4 flex`}>
                    <text style={tailwind`basis-1/4 text-lg text-slate-50`}>Password:</text>
                    <TextInput style={tailwind`basis-3/4 ml-2 rounded bg-transparent border border-white`}/>
                </view>
            </view>
        </view>
    )
}
export default LoginScreen