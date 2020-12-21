import { StyleSheet } from 'react-native'
import sizes from '../config/sizes'

export const layoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.containerSpace
  },
  cardList: {
    flex: 1,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: sizes.unitSize * 5,

},

circularButton: {
    width: 100,
    height: 40,
    borderRadius: 150,
    margin: 10,
    backgroundColor: '#FFFFFF',
},
cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    margin: 10,
},
img: {
    flex: 1,
    height: 150,
    width: 150,
    borderRadius: 15,
},
statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
    padding: 5,
    margin: 5,
    backgroundColor: '#FFFFFF',
},

statsBox: {
    flex: 1,
    margin: 0,
    alignItems: "center",
    borderRadius: 20,
    //backgroundColor: '#F7B40A',
    height:'auto'
    
},
profileImage: {
  width: 150,
  height: 150,
  borderRadius: 100,
  overflow: "hidden",
  backgroundColor: '#F7B40A',
},
image: {
  flex: 1,
  height: 'auto',
  width: 'auto',
  borderRadius: 15,
},

  
})

