import { View, FlatList, Text } from "react-native";
import nftData from "../../../data/nftData";
import Card from "../../common/card/Card";
import { COLORS, SIZES } from "../../../constants";

const Popular = () => {
  return (
    <View style={{ paddingLeft: SIZES.small, marginTop:SIZES.medium }}>
      <Text style={{ fontSize: SIZES.xLarge, color: '#111' }}>
        Popular NFTs
      </Text>
      <View  style={{marginTop:SIZES.small }}>
      <FlatList
        data={nftData}
        renderItem={(item) => (
          <Card nftName={item.item.nftName} nftUrl={item.item.nftUrl} />
        )}
        keyExtractor={(item) => item?.id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      </View>
    </View>
  );
};

export default Popular;
