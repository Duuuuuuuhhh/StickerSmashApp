import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Button() {
  return (
    <View style={styles.buttoncontainer}>
        <Pressable 
        style={styles.button}
        onPress={() => alert('Você pressionou um Botão')}
        >
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      <Text>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})