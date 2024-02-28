import { Tabs } from "expo-router";
import { COLORS, SIZES, icons } from "../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          title: "",
          borderTopLeftRadius: SIZES.medium,
          borderTopRightRadius: SIZES.medium,
          height: 105,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#111" : "gray",
                }}
              />
              {/* <Text style={{fontSize: SIZES.small, textAlign: 'center'}}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Second"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.edit}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#111" : "gray",
                }}
              />
              {/* <Text style={{fontSize: SIZES.small, textAlign: 'center'}}>Edit</Text> */}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="CreateTask"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
              <Image
                source={icons.addButton}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 20,
                  tintColor: focused ? "#111" : "gray",
                }}
              />
          ),
        }}
      />
      <Tabs.Screen
        name="Gallery"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.gallery}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#111" : "gray",
                }}
              />
              {/* <Text style={{fontSize: SIZES.small, textAlign: 'center'}}>Gallery</Text> */}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#111" : "gray",
                }}
              />
              {/* <Text style={{fontSize: SIZES.small, textAlign: 'center'}}>Profile</Text> */}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};
