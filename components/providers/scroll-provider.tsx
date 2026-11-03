"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ScrollTarget = string | number;

interface ScrollController {
  /** Scroll to a section by selector/id (e.g. "#services") or absolute px. */
  scrollTo: (target: ScrollTarget) => void;
}

interface ScrollContextValue {
  scrollTo: (target: ScrollTarget) => void;
  register: (controller: ScrollController | null) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ScrollContext = createContext<ScrollContextValue>({
  scrollTo: () => {},
  register: () => {},
  activeIndex: 0,
  setActiveIndex: () => {},
});

/**
 * Access the programmatic full-page scroll controller. Exposes `scrollTo`
 * (to drive section navigation from nav/footer), the current `activeIndex`,
 * and a `register` handle used by the scroll container to install itself.
 */
export function useScrollController() {
  return useContext(ScrollContext);
}

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const controllerRef = useRef<ScrollController | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const register = useCallback((controller: ScrollController | null) => {
    controllerRef.current = controller;
  }, []);

  const scrollTo = useCallback((target: ScrollTarget) => {
    controllerRef.current?.scrollTo(target);
  }, []);

  return (
    <ScrollContext.Provider
      value={{ scrollTo, register, activeIndex, setActiveIndex }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
