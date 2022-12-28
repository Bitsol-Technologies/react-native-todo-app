import React from 'react';
import { Button, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../Theme';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styles from './styles';

interface GradientButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const GradientButton = (props: GradientButtonProps) => {
  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, props.style]}>
      <Button onPress={props.onPress} mode="text">
        <Text variant="labelLarge" style={[styles.text, props.textStyle]}>
          {props.label}
        </Text>
      </Button>
    </LinearGradient>
  );
};

export default GradientButton;
