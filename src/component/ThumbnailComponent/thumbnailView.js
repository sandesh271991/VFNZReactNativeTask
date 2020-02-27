import React, { Component } from 'react';
import {
  FlatList, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { ActivityIndicator, Provider } from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './style';
import ErrorAlert from '../../common/ErrorAlertComponent/errorAlert';
import * as myConstant from '../../common/constants';
import { listThumb } from '../../../reducer';

class Thumbnail extends Component {

  componentDidMount() {
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumID', 'no data');
    this.props.listThumb(albumId);
  }

  renderItem = ({ item }) => (

    <View style={styles.listRowContainer}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('AlbumDetailsViewScreen', {
        albumTitle: item.title, albumImg: item.url
      })} style={styles.listRow}>
        <View style={styles.listTextNavVIew}>
          <Image source={{ uri: item.thumbnailUrl }} style={styles.imageViewContainer} />
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { repos } = this.props;
    return (
      <Provider>
        <View style={styles.listContainer} >
          <FlatList
            styles={styles.container}
            data={repos}
            renderItem={this.renderItem}
            numColumns={3}
          />
        </View>
      </Provider>
    );
  }
}

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listThumb
};

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
