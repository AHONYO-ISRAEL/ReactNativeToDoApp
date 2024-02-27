import { TouchableOpacity, Image, Text, View} from 'react-native';

import styles from './fruitRounded.style'

const FruitRoundedBtn = ({iconUrl, iconName, handlePress, dimension}) => {
  return (
    <View >
    <TouchableOpacity style={styles.btnContainer}>
      <Image  
      source={iconUrl}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
    <Text style={styles.btnText}> {iconName} </Text>

    </View>
  )
}

export default FruitRoundedBtn
