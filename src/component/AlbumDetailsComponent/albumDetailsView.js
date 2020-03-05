import React from 'react';
import { View, Image } from 'react-native';
import { Button, Provider, Text } from 'react-native-paper';
import styles from './style';
import PropTypes from 'prop-types';


export default class DetailView extends React.Component {
    static navigationOptions = {
      title: 'Album Details',
    };

    render() {
      const { navigation } = this.props;
      const albumTitle = navigation.getParam('albumTitle', 'Default data');
      const albumImg = navigation.getParam('albumImg', 'some default value');
      const goBackToHome = () => this.props.navigation.goBack(this.props.navigation.state.key);

      return (
          <React.Fragment>
            <Provider>
              <View style={styles.mainContainer}>
                <View style={styles.albumViewContainer}>
                    <Image source = {{ uri: albumImg }} style={styles.imageView} />
                    <Text style={styles.textStyle} testID={'albumText'}>{albumTitle}</Text>
                    <Button mode="contained"
                        onPress={() => this.props.navigation.navigate('HomeScreen', { goBackToHome })}
                        style={styles.buttonStyle} testID='HomeButton'>
                        HOME
                    </Button>
                </View>
              </View>
            </Provider>
          </React.Fragment>
      );
    }
}

DetailView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

