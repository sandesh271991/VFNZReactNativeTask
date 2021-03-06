import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../component/HomeComponent/home';
import ThumbnailView from '../component/ThumbnailComponent/thumbnailView';
import AlbumDetailsView from '../component/AlbumDetailsComponent/albumDetailsView';


const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  ThumbnailViewScreen: { screen: ThumbnailView },
  AlbumDetailsViewScreen: { screen: AlbumDetailsView },
},
{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#0c82f3',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const NavigationApp = createAppContainer(MainNavigator);
export default NavigationApp;
