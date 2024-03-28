import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  keyboardView: {
    backgroundColor: 'black',
    height: Dimensions.get('screen').height,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerText: {
    color: 'white',
    marginLeft: wp('20%'),
    fontWeight: '600',
    fontSize: 16,
  },
  mediumPart: {
    display: 'flex',
    flexDirection: 'column',
    height: Dimensions.get('screen').height * 0.87,
  },
  input: {
    paddingVertical: 15,
    backgroundColor: '#3A3B3C',
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
    borderRadius: 8,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  newsChannels: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  cards: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: '#3A3B3C',
    alignItems: 'center',
    height: 170,
    width: wp("28%")
  },
  newsName: {
    color: 'white',
    alignItems: 'center',
    marginVertical: 5,
    fontWeight: '300',
  },
  followButton: {
    borderWidth: 1,
    borderColor: '#1877F2',
    paddingHorizontal: 8,
    borderRadius: 6,
    paddingVertical: 2,
    marginVertical: 5,
    width: 80,
    alignItems: "center"
  },
  nextButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
    // marginTop: hp("12%"),,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
