import {StyleSheet} from 'react-native';

const ScreenStyles = StyleSheet.create({
  MainContainer: {flex: 1, flexDirection: 'column'},

  loader: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "row",
    backgroundColor: "#192338",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: -1
  },
  lightText: {
    color: "#f7f7f7",
    width: 200,
    paddingLeft: 15,
    fontSize: 12
   },
  line: {
    height: 0.5,
    width: "100%",
    backgroundColor:"rgba(255,255,255,0.5)"
  },
  icon: {
    position: "absolute",  
    bottom: 20,
    width: "100%", 
    left: 290, 
    zIndex: 1
  },
  numberBox: {
    position: "absolute",
    bottom: 75,
    width: 30,
    height: 30,
    borderRadius: 15,  
    left: 330,
    zIndex: 3,
    backgroundColor: '#e3e3e3',
    justifyContent: "center",
    alignItems: "center"
  },

  selected: {backgroundColor: "#FA7B5F"},
});

export default ScreenStyles;
