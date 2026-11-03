"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  dictionaries,
  type Dictionary,
  type Language,
} from "@/lib/dictionaries";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Resolved dictionary for the active language. */
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "crewpack.lang";

/**
 * Instant, client-side language switching — no route change, no reload.
 * Content updates in place because every section consumes the resolved
 * dictionary via `useLanguage()`. The active language is persisted to
 * localStorage and rehydrated on mount.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Rehydrate the persisted locale after mount (avoids SSR hydration mismatch).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && dictionaries[saved]) setLangState(saved);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
