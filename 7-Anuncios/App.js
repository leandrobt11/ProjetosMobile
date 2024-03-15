import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

function App(){
  return(
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.box}>
          <Image source={{ uri: 'https://preview.redd.it/i-redid-the-marvels-spider-man-2-box-art-v0-3hyajdg1oybb1.jpg?width=1080&crop=smart&auto=webp&s=0ced1220928803cbb64e57dd7f0ddf9960cab692' }} style={styles.image} />
          <Text style={styles.text}>R$ 250,00</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.YBkk95kXEC8rHSQn4jpl2gAAAA?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.text}>R$ 300,00</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://assets.vg247.com/current/2018/05/red_dead_redemption_2_cover_art_1.jpg' }} style={styles.image} />
          <Text style={styles.text}>R$ 230,00</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/6110RSDn3PL.jpg' }} style={styles.image} />
          <Text style={styles.text}>R$ 120,00</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    backgroundColor: '#fff',
    height: 250,
    width: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
  }
})

export default App;




