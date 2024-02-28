import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../constants";
import { Popular, ScreenHeaderBtn } from "../../components";
import { FruitRoundedBtn } from "../../components";
import fruitData from "../../data/roundedElements";

const Gallery = () => {
  return (
    <ScrollView>
      <View>
        <Stack.Screen
          options={{
            title: "",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: "bold",
            },

              headerLeft:()=>(
                <Text  style={{fontSize: SIZES.large, fontWeight: 'bold',}}>Gallery</Text>
              ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.gear} dimension="100%" />
            ),
          }}
        />
        <View style={{marginTop:SIZES.small, paddingHorizontal: SIZES.small,}}>
        <FlatList
          data={fruitData}
          renderItem={(item) => (
            <FruitRoundedBtn
              iconUrl={item.item.iconUrl}
              iconName={item.item.iconName}
              dimension={"90%"}
            />
          )}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        </View>
        <Popular />
      </View>
    </ScrollView>
  );
};
export default Gallery;
