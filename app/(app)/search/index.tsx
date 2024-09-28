import { View, Text, FlatList, Image, Pressable, Linking } from 'react-native';
import React from 'react';

import dummyProducts from '~/assets/search.json';

const products = dummyProducts.splice(0, 20);

const SearchResultScreen = () => {
  return (
    <View>
      <Text className="px-3 text-xl">Search Results</Text>
      <FlatList
        data={products}
        contentContainerClassName="gap-2 p-2"
        renderItem={({ item }) => (
          <Pressable
            onPress={() => Linking.openURL(item.url)}
            className="flex-row gap-2 bg-white p-3">
            <Image source={{ uri: item.image }} className="w-100 aspect-square rounded" />
            <Text className="flex-1" numberOfLines={4}>
              {item.name}
            </Text>
            <Text>$ {item.final_price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default SearchResultScreen;
