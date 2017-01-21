import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default class TabBar extends Component {
  _renderTabIcon(tab, name) {
    switch(tab){
      case 'DiscoverActive':
        return (
          <View style={styles.TabItemInner}>
            <Image style={styles.TabImage} source={require(`../assets/images/TabBarDiscover_Active.png`)}/>
          </View>
        );
      case 'DiscoverInactive':
        return (
          <View style={styles.TabItemInner}>
            <Image style={styles.TabImage} source={require(`../assets/images/TabBarDiscover_Inactive.png`)}/>
          </View>
        );
      break;
      case 'FavoritesActive':
        return (
          <View style={styles.TabItemInner}>
            <Image style={styles.TabImage} source={require(`../assets/images/TabBarFavorites_Active.png`)}/>
          </View>
        );
      case 'FavoritesInactive':
        return (
          <View style={styles.TabItemInner}>
            <Image style={styles.TabImage} source={require(`../assets/images/TabBarFavorites_Inactive.png`)}/>
          </View>
        );
      break;
      case 'ListsActive':
        return (
          <View style={styles.TabItemInner}>
            <Image style={styles.TabImage} source={require(`../assets/images/TabBarLists_Active.png`)}/>
          </View>
        );
      case 'ListsInactive':
        return (
          <View style={styles.TabItemInner}>
            <Image style={styles.TabImage} source={require(`../assets/images/TabBarLists_Inactive.png`)}/>
          </View>
        );
      break;
    }
  }

  _renderTabItem(tab) {
    if (tab == this.props.currentTab) {
      return this._renderTabIcon(`${tab}Active`, tab);
    } else {
      return this._renderTabIcon(`${tab}Inactive`, tab);
    }
  }

  render() {
    return (
      <View style={styles.TabBar}>
        <TouchableWithoutFeedback underlayColor='transparent' activeOpacity={1} onPressIn={this.props.switchTab.bind(this, 'Discover')}>
          { this._renderTabItem('Discover') }
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback underlayColor='transparent' activeOpacity={1} onPressIn={this.props.switchTab.bind(this, 'Favorites')}>
          { this._renderTabItem('Favorites') }
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback underlayColor='transparent' activeOpacity={1} onPressIn={this.props.switchTab.bind(this, 'Lists')}>
          { this._renderTabItem('Lists') }
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 49,
    backgroundColor: '#000000'
  },
  TabItemInner: {
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  TabImage: {
    width: 25,
    height: 25
  }
});
