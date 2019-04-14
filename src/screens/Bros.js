import _ from "lodash";
import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Card, Text, Image } from "react-native-ui-lib"; //eslint-disable-line

const cardImage = require("../../data/ProfileImage.jpg");
const bros = [
  { name: "Naor", description: "The Mighty Bro" },
  { name: "Alush", description: "The Brochacho" },
  { name: "Beygel", description: "The Brostation" }
];

export default class BrosList extends Component {
  state = {
    selected1: true,
    selected2: true
  };
  render() {
    let cards = bros.map(bro => {
      return (
        <Card
          row
          height={160}
          style={{ marginBottom: 15 }}
          onPress={() => {}}
          // enableBlur
        >
          <Card.Image width={115} imageSource={cardImage} />
          <View padding-20 flex>
            <Text text70 dark10>
              {bro.name}
            </Text>
            <Text text8 dark10>
						{bro.description}
            </Text>

            <Text text90 dark50>
              last send message
            </Text>
          </View>
        </Card>
      );
    });

    return (
      <View height={"100%"}>
        <Image
          style={StyleSheet.absoluteFillObject}
          source={{
            uri:
              "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }}
        />

        <ScrollView>
          <View flex padding-20>
            {cards}
          </View>
        </ScrollView>
      </View>
    );
  }
}