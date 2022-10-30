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

export const DetailsDesc = ({ data }) => {
  const [description, setDescription] = useState(
    data.description.slice(0, 150)
  );
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontfamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>

        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.small,
              fontfamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {description}
            {!showMore ? "..." : ""}

            <Text
              style={{
                fontSize: SIZES.small,
                fontfamily: FONTS.bold,
                color: COLORS.primary,
              }}
              onPress={() => {
                if (!showMore) {
                  setDescription(data.description);
                  setShowMore(true);
                } else {
                  setDescription(data.description.slice(0, 150));
                  setShowMore(false);
                }
              }}
            >
              {showMore ? " Show Less " : " Read More "}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};
