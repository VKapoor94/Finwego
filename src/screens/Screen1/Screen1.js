import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import StudentComponent from '../../components/StudentComponent';

import StudentData from '../../data/StudentData';
import styles from './Screen1.style';
import {FAB} from 'react-native-paper';
import COLOR from '../../theme/Color';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => <StudentComponent item={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={StudentData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        color={COLOR.WHITE}
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default Screen1;
