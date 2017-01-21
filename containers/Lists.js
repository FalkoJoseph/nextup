import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Navigator
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Header from '../components/Header';
import TableList from '../components/TableList';
import ListsOverview from '../containers/ListsOverview';
import ListsPage from '../containers/ListsPage';

export default class Lists extends Component {
  _navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Overview':
        return (<ListsOverview navigator={navigator} title={route.title} />);
      case 'Single':
        return (<ListsPage navigator={navigator} title={route.title} />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          sceneStyle={styles.navigator}
          initialRoute={{
            id: 'Overview'
          }}
          renderScene={this._navigatorRenderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigator: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    overflow: 'visible',
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowRadius: 7,
    shadowOpacity: 0.2
  }
});
