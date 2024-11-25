import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor:'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  containerNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'white',
    marginTop:'6%',
  },
  logo: {
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: 'Inter_400Regular',
    alignItems:'center',
    paddingLeft:'3%'
  },
  icones: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
   // gap:'2%',
    paddingRight:'5%',
  },
  texto:{
    fontWeight:'bold'
  }
});

export default styles;
