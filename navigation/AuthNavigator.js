import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import ContactsScreen from '../screens/ContactsScreen';
import TabBarIcon from '../components/TabBarIcon';



export default createStackNavigator({
    Authentication: LoginScreen,
  });

