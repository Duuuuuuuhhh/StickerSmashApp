import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import ImageViewer from './src/components/ImageViewer';
import Button from './src/components/Button';

const PlaceholderImage = require('./assets/images/cu.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={{PlaceholderImage}}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Escolher foto"/>
        <Button label="Usar esta Foto"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
  },
  imageContainer :{
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    felx: 1 / 3,
    alignItems: 'center',
  }
});