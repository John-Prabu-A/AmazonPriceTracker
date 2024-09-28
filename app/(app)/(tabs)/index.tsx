import { Link, router, Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import loginScreen from '../(auth)/login';
import { supabase } from '~/utils/supabase';

export default function Home() {
  const performSearch = () => {
    router.push('/search');

    // save this search in database

    // scrape amazon for this query

    setQuery('');
  };
  const [query, setQuery] = useState('');

  return (
    <>
      <Stack.Screen options={{ title: 'Search' }} />
      <View className="flex-row gap-3 p-3">
        <TextInput
          onChangeText={setQuery}
          value={query}
          placeholder="Search for a product"
          className="flex-1 rounded border border-gray-300 p-2"
        />
        <Pressable onPress={performSearch} className="rounded bg-teal-500 p-3">
          <Text>Search</Text>
        </Pressable>
      </View>
      <Link href="/(auth)/login">Open Auth Screen</Link>
      <Text onPress={() => supabase.auth.signOut()}>Sign Out</Text>
    </>
  );
}
