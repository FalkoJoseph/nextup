import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.cardImage} source={require('../assets/images/sample.jpg')}/>
        <View style={styles.cardOverlay}></View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Seattle</Text>
          <Text style={styles.cardDescription}>United States</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    width: 185,
    height: 185,
    borderRadius: 8,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 7,
    shadowOpacity: 0.4
  },
  cardImage: {
    width: 185,
    height: 185,
    position: 'absolute',
    zIndex: 0,
    borderRadius: 8
  },
  cardOverlay: {
    position: 'absolute',
    width: 185,
    height: 185,
    zIndex: 1,
    backgroundColor: '#000000',
    opacity: 0.6,
    borderRadius: 8
  },
  cardContent: {
    padding: 15,
    zIndex: 2,
    height: 185,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  cardTitle: {
    marginBottom: 3,
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff'
  },
  cardDescription: {
    color: '#ffffff',
    opacity: 0.8
  }
});
