import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {
  _renderTitle() {
    if (this.props.title) {
      return (
        <Text
          ellipsizeMode="middle"
          numberOfLines={1}
          style={styles.headerTitle}
        >
          {this.props.title}
        </Text>
      );
    }
  }

  _renderLeft() {
    if (this.props.left) {
      switch (this.props.left) {
        case 'Back':
          return (
            <TouchableOpacity onPress={this.props.leftAction.bind(this)}>
              <View style={styles.headerBack}>
                <Image style={styles.headerBackIcon} source={require('../assets/images/Back.png')}/>
              </View>
            </TouchableOpacity>
          );
        default:
          return (
            <TouchableOpacity onPress={this.props.leftAction.bind(this)}>
              <View>
                <Text style={styles.headerLabel}>{this.props.left}</Text>
              </View>
            </TouchableOpacity>
          );
        break;
      }
    }
  }

  _renderRight() {
    if (this.props.right) {
      return (
        <TouchableOpacity onPressIn={this.props.rightAction.bind(this)}>
          <View>
            <Text style={styles.headerLabel}>{this.props.right}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          { this._renderLeft() }
        </View>
        <View style={styles.headerCenter}>
          { this._renderTitle() }
        </View>
        <View style={styles.headerRight}>
          { this._renderRight() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
    height: 64,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9'
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start'
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  headerBack: {
    padding: 10,
    paddingRight: 20
  },
  headerBackIcon: {
    width: 13,
    height: 21,
  },
  headerCenter: {
    flex: 4,
    alignItems: 'center'
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: 17
  },
  headerLabel: {
    padding: 10,
    paddingRight: 12,
    paddingLeft: 12,
    fontSize: 17
  }
});
