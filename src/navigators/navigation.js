import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/Screen1/Screen1';
import Screen2 from '../screens/Screen2/Screen2';
import Screen3 from '../screens/Screen3/Screen3';
import Screen4 from '../screens/Screen4/Screen4';
import COLOR from '../theme/Color';
import en from '../locales/en';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Navigation = () => {
  const headerTitleStyle = {
    fontWeight: 'bold',
    alignSelf: 'center',
  };
  const headerStyle = {
    backgroundColor: COLOR.ORANGE,
  };

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{
              title: en.HEADER_SCREEN1,
              headerStyle: headerStyle,
              headerTintColor: COLOR.WHITE,
              headerTitleStyle: headerTitleStyle,
            }}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{
              title: en.HEADER_SCREEN2,
              headerStyle: headerStyle,
              headerTintColor: COLOR.WHITE,
              headerTitleStyle: headerTitleStyle,
              headerRight: () => (
                <View style={{marginRight: 15}}>
                  <AntDesign name="pluscircleo" size={24} color={COLOR.WHITE} />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{
              title: en.HEADER_SCREEN3,
              headerStyle: headerStyle,
              headerTintColor: COLOR.WHITE,
              headerTitleStyle: headerTitleStyle,
              headerRight: () => (
                <View style={{marginRight: 15}}>
                  <AntDesign name="pluscircleo" size={24} color={COLOR.WHITE} />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Screen4"
            component={Screen4}
            options={{
              title: 'Welcome to Radius',
              headerStyle: headerStyle,
              headerTintColor: COLOR.WHITE,
              headerTitleStyle: headerTitleStyle,
            }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default Navigation;
