import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Collection from '../components/Collection';

export default class CollectionList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.collectionsTitle}>Collections</Text>
        <Text style={styles.collectionsDescription}>
          Curated places around the world.
        </Text>

        <ScrollView
          style={styles.collectionsScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.collectionsWrapper}>
            <Collection />
            <Collection />
            <Collection />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  collectionsScroll: {
    backgroundColor: 'transparent',
    height: 148
  },
  collectionsWrapper: {
    flexDirection: 'row',
    marginRight: 10,
    height: 138
  },
  collectionsTitle: {
    marginLeft: 10,
    fontSize: 28,
    fontWeight: '800'
  },
  collectionsDescription: {
    marginLeft: 10,
    marginBottom: 20,
    color: '#AFAFAF'
  }
});
