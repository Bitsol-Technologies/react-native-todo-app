import React from 'react';
import Loader from 'react-native-loading-spinner-overlay';
import { Colors } from '../../Theme';

interface LoaderProps {
  visible: boolean;
}

const Spinner = (props: LoaderProps) => {
  return <Loader color={Colors.primary} visible={props.visible} size="large" />;
};

export default Spinner;
