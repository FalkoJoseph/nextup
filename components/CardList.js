import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Card from '../components/Card';

export default class CardList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.cardsTitle}>United States</Text>
        <ScrollView
          style={styles.cardsScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.cardsWrapper}>
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardsScroll: {
    backgroundColor: 'transparent',
    height: 215
  },
  cardsWrapper: {
    flexDirection: 'row',
    marginRight: 10,
    height: 182,
  },
  cardsTitle: {
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '800'
  }
});
