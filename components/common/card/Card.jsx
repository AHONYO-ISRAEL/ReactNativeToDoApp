
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import styles from './card.style';

const Card = ({ nftUrl, nftName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={nftUrl} resizeMode="cover" style={styles.nftImage} />
      <View style={styles.overlay}>
        <Text style={styles.nftName}> {nftName} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

