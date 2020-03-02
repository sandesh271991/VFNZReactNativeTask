/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  FlatList, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { ActivityIndicator, Provider } from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './style';
import ErrorAlert from '../../common/errorAlertComponent/errorAlert';
import * as myConstant from '../../common/constants';
import { listThumb } from '../../reducer/reducer';

class Thumbnail extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumID', 'no data');
    this.props.listThumb(albumId);
  }

  renderItem = ({ item }) => (

    <View style={styles.listRowContainer}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('AlbumDetailsViewScreen', {
        albumTitle: item.title, albumImg: item.url,
      })} style={styles.listRow}>
        <View style={styles.listTextNavVIew}>
          <Image source={{ uri: item.thumbnailUrl }} style={styles.imageViewContainer} />
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { error, loading, albums } = this.props;

    if (error) {
      return <ErrorAlert />;
    }

    if (loading) {
      return (
        <View style={{ flex: 1, paddingTop: 30 }}>
            <ActivityIndicator animating={true} size='large' />
        </View>
      );
    }

    return (
      <Provider>
        <View style={styles.listContainer} >
          <FlatList
            styles={styles.container}
            data={albums}
            renderItem={this.renderItem}
            numColumns={3}
          />
        </View>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  const storedRepositories = state.albums.map((repo) => ({ key: repo.id, ...repo }));
  return {
    albums: storedRepositories,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  listThumb,
};

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
