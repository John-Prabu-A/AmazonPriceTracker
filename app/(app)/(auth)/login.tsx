import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { supabase } from '~/utils/supabase';
import React, { useState } from 'react';
import { router, Stack } from 'expo-router';
const loginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      Alert.alert('Error Sign In', error.message);
    } else {
      setEmail('');
      setPassword('');
      router.replace('/');
    }
  };
  const onSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error Creating account', error.message);
    } else {
      setEmail('');
      setPassword('');
      router.replace('/');
    }
  };
  return (
    <View>
      <Stack.Screen options={{ title: 'Sign In' }} />
      <View className="flex-row gap-3 p-3">
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          className="flex-1 rounded border border-gray-300 p-2"
        />
      </View>
      <View className="flex-row gap-3 p-3">
        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="password"
          className="flex-1 rounded border border-gray-300 p-2"
        />
      </View>
      <View className="flex-row gap-3 p-3">
        <Pressable onPress={onSignIn} className="flex-1 items-center rounded bg-teal-500 p-3">
          <Text className="font-bold text-white">Sign In</Text>
        </Pressable>
        <Pressable
          onPress={onSignUp}
          className="flex-1 items-center rounded bg-teal-500 p-3 text-center">
          <Text className="font-bold text-white">Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default loginScreen;
