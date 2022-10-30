import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

import { EthPrice, NFTTitle } from "../SubInfo";

export const DetailsBid = ({ bid }) => {
  console.log({ bid });

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View>
        <Text
          style={{
            fontSize: SIZES.small,
            fontfamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>

        <Text
          style={{
            fontSize: SIZES.small - 2,
            fontfamily: FONTS.regular,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};
