import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Products from './components/Products/Products';

export default function App() {

  return (
    <View>

      <View>
        <Products />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
