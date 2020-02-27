import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../HomeComponent/style';
import { Ionicons } from '@expo/vector-icons';
import { listRepos } from '../../../reducer';
import ErrorAlert from '../../common/ErrorAlertComponent/errorAlert';


class Home extends Component {
  componentDidMount() {
    this.props.listRepos('');
  }

  FlatListItemSeparator = () => (
    <View style={styles.flatListItemSeparator} />
  )

  renderItem = ({ item }) => (

    <View style={styles.listRowContainer}>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('ThumbnailViewScreen', {
        albumID: item.id,
      })} style={styles.listRow}>
        <View style={styles.listTextNavVIew}>
          <Text style={styles.albumTitle}> {item.title} </Text>
          <Ionicons name='md-arrow-dropright' style={styles.detailArrow} />
        </View>
      </TouchableOpacity>

    </View>
  );
  render() {
    const { error, loading, products } = this.props;

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
    const { repos } = this.props;
    return (
      <View style={styles.MainContainer} >
        <FlatList
          styles={styles.container}
          data={repos}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.FlatListItemSeparator}

        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id.toString(), ...repo }));
  return {
    repos: storedRepositories, 
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
