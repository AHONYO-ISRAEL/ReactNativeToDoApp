import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 350,
    borderRadius: SIZES.medium,
    overflow: 'hidden', 
    position: 'relative', 
  },
  nftImage: {
    width: '100%',
    height: '100%', 
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    padding: SIZES.base, 
    justifyContent: 'flex-end', 
  },
  nftName: {
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
  },
});

export default styles;
