import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Collection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.collectionTitle}>Most beautiful destinations</Text>
        <Text style={styles.collectionDescription}>5 cities</Text>

        <View style={styles.collectionImages}>
          <Image style={styles.collectionImage} source={require('../assets/images/sample.jpg')}/>
          <Image style={styles.collectionImage} source={require('../assets/images/sample.jpg')}/>
          <Image style={styles.collectionImage} source={require('../assets/images/sample.jpg')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.07
  },
  collectionTitle: {
    marginBottom: 2,
    fontSize: 18,
    fontWeight: '800'
  },
  collectionDescription: {
    color: '#AFAFAF'
  },
  collectionImages: {
    marginTop: 15,
    flexDirection: 'row'
  },
  collectionImage: {
    marginRight: 5,
    width: 50,
    height: 50,
    borderRadius: 4
  }
});
