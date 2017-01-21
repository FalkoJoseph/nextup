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

export default class Lists extends Component {
  constructor(props) {
    super(props);
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
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
        <Header title="Lists" />
        <TableList
          dataSource={this.state.dataSource}
          onPress={ this._pressListItem }
          onDelete={ this._pressDelete }
          emptyTitle="You don't have any lists yet"
          emptyDescription="Add personal lists to categorize your findings."
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
