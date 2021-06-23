import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Avatar } from "../Avatar";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://scontent.fpll2-1.fna.fbcdn.net/v/t1.6435-1/p200x200/174561173_1493586424177730_5333503414646015234_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeG7TmexFZa754SrR9iv_Sp38nMKWjAPruHycwpaMA-u4b5EwP-HKJhagRvffnhHiw_MSbyWQy9mIVxU2wptcGJC&_nc_ohc=PmqqL7HY5IYAX81wXNt&_nc_ht=scontent.fpll2-1.fna&tp=6&oh=b9892cc3d2df1fa8c28824ec7185a142&oe=60D6B16B" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Alexandrino</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
