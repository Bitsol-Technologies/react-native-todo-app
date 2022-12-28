import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { Bar } from 'react-native-progress';
import { TodoItem } from '../../Components';
import { HomeText } from '../../Strings';
import { Colors, CommonStyles } from '../../Theme';
import styles from './styles';

const Home = () => {
  return (
    <View style={[CommonStyles.flex, styles.container]}>
      <View style={[CommonStyles.rowSpaceBetween, styles.buttonsContainer]}>
        <Surface style={[styles.tabButton, styles.marginRight]}>
          <TouchableOpacity>
            <Text>3 {HomeText.tasks}</Text>
            <Text variant="headlineSmall" style={CommonStyles.semiBold}>
              {HomeText.personal}
            </Text>
            <Bar
              borderColor={Colors.gradientStart}
              color={Colors.primary}
              progress={0.4}
              unfilledColor={Colors.gradientEnd}
            />
          </TouchableOpacity>
        </Surface>
        <Surface style={[styles.tabButton]}>
          <TouchableOpacity>
            <Text>3 {HomeText.tasks}</Text>
            <Text variant="headlineSmall" style={CommonStyles.semiBold}>
              {HomeText.business}
            </Text>
            <Bar
              borderColor={Colors.gradientStart}
              color={Colors.primary}
              progress={0.4}
              unfilledColor={Colors.gradientEnd}
            />
          </TouchableOpacity>
        </Surface>
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TodoItem
            title="Task"
            description="Some very detailed description of task"
          />
        )}
      />
    </View>
  );
};

export default Home;
