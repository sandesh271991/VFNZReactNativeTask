import React, { Component } from 'react';
import {
  FlatList, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { ActivityIndicator, Provider} from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './styles';


import { listThumb } from './reducer';

class RepoList extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumID', 'no data');
    this.props.listThumb('albumID');
  }


  FlatListItemSeparator = () => (
    <View style={styles.flatListItemSeparator} />
)

  renderItem = ({ item }) => (

<View style={styles.listRowContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AlbumDetailsViewScreen', {
                  albumTitle: item.title, albumImg: item.url
                })} style={styles.listRow}>
                    <View style={styles.listTextNavVIew}>
                      <Image source = {{ uri: item.thumbnailUrl }} style={styles.imageViewContainer} />
                    </View>
                    </TouchableOpacity>
                </View>
  );
  render() {
    const { repos } = this.props;
    return (
      <View style={styles.listContainer} >
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem} 
        numColumns={3}
      />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
