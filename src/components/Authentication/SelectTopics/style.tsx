import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  keyboardView: {
    backgroundColor: 'black',
    height: hp('100%'),
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
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  searchBox: {
    marginTop: 40,
    marginHorizontal: 10,
  },
  inputBox: {
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
  topicsView: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30,
    height: hp("20%")
  },
  selectTopics: {
    paddingVertical: 10,
    // paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#1877F2',
    borderRadius: 6,
    marginHorizontal: 6,
    marginVertical: 4,
    width: "30%",
  },
  nextBtn: {
    backgroundColor: '#1877F2',
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: hp('45%'),
  },
});
