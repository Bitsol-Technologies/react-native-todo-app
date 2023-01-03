import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import { CommonStyles } from '../../Theme';
import styles from './styles';

interface TodoItemProps {
  title: string;
  description?: string;
  done?: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const [done, setDone] = useState(props.done ?? false);
  return (
    <Surface style={styles.container}>
      <View style={[CommonStyles.rowSpaceBetween]}>
        <Text variant="titleLarge" style={CommonStyles.boldText}>
          {props.title}
        </Text>
        <Button>
          <Text>dads</Text>
        </Button>
      </View>
      {props.description && <Text>{props.description}</Text>}
    </Surface>
  );
};

export default TodoItem;
