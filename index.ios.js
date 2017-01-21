import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabBar from './components/TabBar';
import Discover from './containers/Discover';
import Favorites from './containers/Favorites';
import Lists from './containers/Lists';

export default class nextup extends Component {
  constructor(props) {
    super(props);
    this._switchTab = this._switchTab.bind(this);

    this.state = {
      currentTab: 'Discover'
    };
  }

  _switchTab(tab) {
    this.setState({currentTab: tab});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.view, this.state.currentTab == 'Discover' && styles.viewActive]}>
          <Discover />
        </View>
        <View style={[styles.view, this.state.currentTab == 'Favorites' && styles.viewActive]}>
          <Favorites />
        </View>
        <View style={[styles.view, this.state.currentTab == 'Lists' && styles.viewActive]}>
          <Lists />
        </View>
        <TabBar switchTab={ this._switchTab } currentTab={this.state.currentTab}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F8F8F8'
  },
  view: {
    left: -1000
  },
  viewActive: {
    flex: 1,
    left: 0
  }
});

AppRegistry.registerComponent('nextup', () => nextup);
