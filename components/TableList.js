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
import EmptyState from '../components/EmptyState';

export default class TableList extends Component {
  _renderSeparator(sectionID: number, rowID: number) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    );
  }

  _renderListItemImage(data) {
    if (data.image) {
      return (
        <Image style={styles.listItemImage} source={data.image}/>
      );
    }
  }

  _renderListItemDescription(data) {
    if (data.description) {
      return (
        <Text style={styles.listItemDescription}>{data.description}</Text>
      );
    }
  }

  _renderSwipeListView() {
    return (
      <SwipeListView
        disableRightSwipe={true}
        dataSource={this.props.dataSource}
        enableEmptySections={true}
        renderRow={data => (
          <TouchableHighlight activeOpacity={0.6} underlayColor="#EFEFF4" onPress={this.props.onPress.bind(this, data)}>
            <View style={[styles.listItem, !data.image && styles.listItemSingle]}>
              { this._renderListItemImage(data) }
              <View style={styles.listItemText}>
                <Text style={styles.listItemName}>{data.name}</Text>
                { this._renderListItemDescription(data) }
              </View>
            </View>
          </TouchableHighlight>
        )}
        renderSeparator={this._renderSeparator}
        renderHiddenRow={ data => (
          <View style={styles.rowBack}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={this.props.onDelete.bind(this, data)}>
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    );
  }

  render() {
    if (this.props.dataSource.getRowCount()) {
      return (
        <View style={styles.container}>
          {this._renderSwipeListView()}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <EmptyState title={this.props.emptyTitle} description={this.props.emptyDescription} image={this.props.emptyImage} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    marginLeft: 10,
    height: 1,
    backgroundColor: '#ECECEC'
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#ffffff'
  },
  listItemSingle: {
    paddingLeft: 10
  },
  listItemImage: {
    marginLeft: 10,
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 4
  },
  listItemText: {
    flex: 1
  },
  listItemName: {
    fontSize: 17,
    fontWeight: '600'
  },
  listItemDescription: {
    color: '#8E8E8E'
  },
  rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},
  backRightBtnRight: {
		backgroundColor: '#FF3B30',
		right: 0
	},
  backTextWhite: {
		color: '#FFF'
	},
});
