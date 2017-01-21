import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class EmptyState extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.emptyImage} source={this.props.image}/>
        <Text style={styles.emptyTitle}>{this.props.title}</Text>
        <Text style={styles.emptyDescription}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyImage: {
    marginBottom: 15,
    width: 90,
    height: 90
  },
  emptyTitle: {
    marginBottom: 5,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center'
  },
  emptyDescription: {
    fontSize: 15,
    color: '#A9A9A9',
    textAlign: 'center'
  }
});
