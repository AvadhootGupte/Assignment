import {StyleSheet} from 'react-native';

const ButtonStyles = StyleSheet.create({
  appTouch: {
    alignSelf: 'flex-end',
    width: '95%',
    margin: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'flex-end',
    width: '100%',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default ButtonStyles;
