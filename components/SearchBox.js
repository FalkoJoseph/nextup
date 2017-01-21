import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image
} from 'react-native';

export default class TabBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.SearchIcon} source={require('../assets/images/InputSearch.png')}/>
        <TextInput
          style={styles.SearchBox}
          placeholder="Where to go next?"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 37,
    marginLeft: 10,
    marginRight: 10,
    height: 42,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.07
  },
  SearchBox: {
    flex: 1,
    paddingTop: 2,
    paddingLeft: 40,
    paddingRight: 10,
    fontSize: 16
  },
  SearchIcon: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 18,
    height: 18,
  }
});
