import * as React from 'react';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'rnx-gradient';
import { Colors } from '../../Theme';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface GradientButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const GradientButton = (props: GradientButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, props.style]}>
        <Text variant="labelLarge" style={[styles.text, props.textStyle]}>
          {props.label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
