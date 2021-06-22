import React from 'react';
import Navigation from './src/navigators/navigation';
import {MenuProvider} from 'react-native-popup-menu';

export default function App() {
  return (
    <MenuProvider>
      <Navigation />
    </MenuProvider>
  );
}
