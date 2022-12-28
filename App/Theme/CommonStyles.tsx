import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  fieldMarginTop: {
    marginTop: 20
  },
  centerText: {
    textAlign: 'center'
  },
  boldText: {
    fontWeight: '700'
  },
  semiBold: {
    fontWeight: '600'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
