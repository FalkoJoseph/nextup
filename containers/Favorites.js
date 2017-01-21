import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Header from '../components/Header';
import TableList from '../components/TableList';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {id: 1, name: 'Atlanta', description: 'Hello', image: require('../assets/images/sample.jpg')},
        {id: 2, name: 'Tokyo', description: 'Hi', image: require('../assets/images/sample.jpg')}
      ]),
    };
  }

  _pressListItem(data) {
    alert(data.name)
  }

  _pressDelete(data) {
    alert('Delete: ' +data.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Favorites" />
        <TableList
          dataSource={this.state.dataSource}
          onPress={ this._pressListItem }
          onDelete={ this._pressDelete }
          emptyTitle="You don't have any favorites yet"
          emptyDescription="When you see a city you like, tap the like icon."
          emptyImage={require('../assets/images/EmptyFavorites.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
