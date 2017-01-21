import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import SearchBox from '../components/SearchBox';
import CollectionList from '../components/CollectionList';
import CardList from '../components/CardList';

export default class Discover extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox />

        <ScrollView style={styles.containerScroll}>
          <CollectionList />
          <View style={styles.split}></View>
          <CardList />
          <CardList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerScroll: {
    paddingTop: 20,
    backgroundColor: 'transparent'
  },
  split: {
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 20,
    height: 1,
    backgroundColor: '#E6E6E6'
  }
});
