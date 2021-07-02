import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
type ParamList = {
  Home: undefined;
  About: undefined;
};
type Props = DrawerNavigationProp<ParamList, 'About'>;

const About: React.FC = () => {
  const navigation = useNavigation<Props>();
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello About</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default About;
