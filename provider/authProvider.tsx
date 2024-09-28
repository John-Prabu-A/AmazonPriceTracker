import { Session } from '@supabase/supabase-js';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { supabase } from '~/utils/supabase';

type AuthData = {
  session: Session | null;
  isReady: Boolean;
  user: Session['user'] | null;
};

const AuthContext = createContext<AuthData>({
  session: null,
  isReady: false,
  user: null,
});

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [isReady, setIsReady] = useState<Boolean>(false);

  useEffect(() => {
    setIsReady(false);
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    setIsReady(true);
  }, []);

  return (
    <AuthContext.Provider value={{ session, user: session?.user || null, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
