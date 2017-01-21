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

export default class ListsPage extends Component {
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

  _back() {
    this.props.navigator.jumpBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header left="Back" leftAction={this._back.bind(this)} title={this.props.title} />
        <TableList
          dataSource={this.state.dataSource}
          onPress={ this._pressListItem }
          onDelete={ this._pressDelete }
          emptyTitle="You don't have any cities added yet"
          emptyDescription="Start adding more cities to your list."
          emptyImage={require('../assets/images/EmptyLists.png')}
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
