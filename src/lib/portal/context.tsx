'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { ClientProfile } from './api';
import type { User } from '@supabase/supabase-js';

type PortalContextType = {
  user: User | null;
  client: ClientProfile | null;
  loading: boolean;
  accessDenied: boolean;
  signOut: () => Promise<void>;
  refreshClient: () => Promise<void>;
};

const PortalContext = createContext<PortalContextType>({
  user: null,
  client: null,
  loading: true,
  accessDenied: false,
  signOut: async () => {},
  refreshClient: async () => {},
});

export function PortalProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [client, setClient] = useState<ClientProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const mountedRef = useRef(true);

  const fetchClient = useCallback(async (userId: string) => {
    const supabase = createClient();
    if (!supabase) {
      setAccessDenied(true);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('supabase_user_id', userId)
      .single();

    if (!mountedRef.current) return;

    if (error || !data) {
      setAccessDenied(true);
    } else {
      setClient(data as ClientProfile);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    const supabase = createClient();
    if (!supabase) {
      // Defer to avoid synchronous setState in effect
      Promise.resolve().then(() => {
        if (mountedRef.current) setLoading(false);
      });
      return;
    }

    supabase.auth.getUser().then(({ data: { user: authUser } }) => {
      if (!mountedRef.current) return;
      if (!authUser) {
        setLoading(false);
        return;
      }
      setUser(authUser);
      fetchClient(authUser.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mountedRef.current) return;
      if (session?.user) {
        setUser(session.user);
        fetchClient(session.user.id);
      } else {
        setUser(null);
        setClient(null);
        setAccessDenied(false);
        setLoading(false);
      }
    });

    return () => {
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, [fetchClient]);

  const signOut = async () => {
    const supabase = createClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    window.location.replace(window.location.origin + '/portal/login');
  };

  const refreshClient = async () => {
    if (user) {
      setLoading(true);
      await fetchClient(user.id);
    }
  };

  return (
    <PortalContext.Provider value={{ user, client, loading, accessDenied, signOut, refreshClient }}>
      {children}
    </PortalContext.Provider>
  );
}

export const usePortal = () => useContext(PortalContext);
