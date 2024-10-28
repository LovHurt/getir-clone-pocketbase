import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View className='mt-10'>
      <StatusBar style='auto'/>
      <HomeScreen/>
    </View>
  );
}
