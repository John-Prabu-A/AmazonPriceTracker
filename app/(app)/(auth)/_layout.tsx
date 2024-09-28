import { Redirect, Slot } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '~/provider/authProvider';

export default function AuthLayout() {
  const { user, isReady } = useAuth;
  if (!isReady) {
    return <ActivityIndicator />;
  }

  if (user) {
    return <Redirect href="/" />;
  }

  return <Slot />;
}
