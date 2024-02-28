 import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '80%',
    alignSelf: 'center',
  },
  circleButton: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Half of the width/height to make it circular
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5, // Adjust as needed
  },
  circleButtonText: {
    fontSize: 18, // Adjust as needed
    color: '#000', // Adjust text color as needed
  },
  dataTable: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  dataTableCell: {
    padding: 2,
    justifyContent: 'center',
  },
  dataTableTitle: {
    justifyContent: 'center',
    // Use flex to allocate space, match these with corresponding cells
    flex: 1, // Adjust flex value as needed
  },
  dataTableText: {
    fontSize: 12, // Choose an appropriate font size
  },
  dataTablePlayer: {
    flex: 3, // Allocates more space to the player name
    justifyContent: 'flex-start',
  },
  dataTableScore: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dataTableDate: {
    flex: 2,
    justifyContent: 'center',
  },  
});

