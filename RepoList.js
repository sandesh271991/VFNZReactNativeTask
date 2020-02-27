import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';


import { listRepos } from './reducer';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('relferreira');
  }
  renderItem = ({ item }) => (

<View style={styles.listRowContainer}>

<TouchableOpacity onPress={() => this.props.navigation.navigate('ThumbnailViewScreen', {
  albumID: item.id,
})} style={styles.listRow}>
<View style={styles.listTextNavVIew}>
  <Text style={styles.albumTitle}> {item.title} </Text>
</View>
</TouchableOpacity>

</View>
  );
  render() {
    const { repos } = this.props;
    return (
      <View style={styles.MainContainer} >
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem} 
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
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
