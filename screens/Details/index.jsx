import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../../constants";
import { CircleButton, RectButton } from "../../components/CircleButton";
import {
  SubInfo,
  FocusedStatusbar,
  DetailsDesc,
  DetailsBid,
} from "../../components";

const DetailsHeader = ({ data, navigation }) => (
  <View
    style={{
      width: "100%",
      height: 373,
    }}
  >
    <Image
      source={data.image}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  </View>
);

export const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FocusedStatusbar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          top: StatusBar.currentHeight * 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
        />

        <CircleButton
          imgUrl={assets.heart}
          handlePress={() => navigation.goBack()}
          right={15}
        />
      </View>

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontfamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </>
        )}
        renderItem={({ item }) => <DetailsBid bid={item} />}
      />
    </SafeAreaView>
  );
};
