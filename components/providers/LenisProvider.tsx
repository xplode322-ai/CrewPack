"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type Lenis from "lenis";

type LenisContextValue = Lenis | null;

const LenisContext = createContext<LenisContextValue>(null);
const SetLenisContext = createContext<Dispatch<SetStateAction<Lenis | null>>>(
  () => {}
);

/**
 * Access the active Lenis instance to drive programmatic smooth scrolling
 * (e.g. anchor links) anywhere in the app.
 */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Register a Lenis instance. Used by the snap-scroll container to expose the
 * instance it creates (with a custom wrapper) to the rest of the tree.
 */
export function useSetLenis() {
  return useContext(SetLenisContext);
}

interface LenisProviderProps {
  children: ReactNode;
}

/**
 * Holds the Lenis instance in React context. The instance itself is created
 * by the snap-scroll container (which owns the scrollable `<main>` wrapper).
 */
export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  return (
    <SetLenisContext.Provider value={setLenis}>
      <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
    </SetLenisContext.Provider>
  );
}
