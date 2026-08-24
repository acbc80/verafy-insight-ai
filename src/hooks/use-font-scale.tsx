import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export const FONT_SCALES = [
  { id: "sm", label: "S", scale: 0.9, name: "Compact" },
  { id: "md", label: "M", scale: 1, name: "Default" },
  { id: "lg", label: "L", scale: 1.12, name: "Comfortable" },
  { id: "xl", label: "XL", scale: 1.25, name: "Large" },
] as const;

export type FontScaleId = (typeof FONT_SCALES)[number]["id"];

const STORAGE_KEY = "verafi:font-scale";

type Ctx = {
  scaleId: FontScaleId;
  setScaleId: (id: FontScaleId) => void;
};

const FontScaleContext = createContext<Ctx | null>(null);

const isValid = (v: string | null): v is FontScaleId =>
  !!v && FONT_SCALES.some((s) => s.id === v);

export const FontScaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [scaleId, setScale] = useState<FontScaleId>(() => {
    if (typeof window === "undefined") return "md";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isValid(stored) ? stored : "md";
  });

  useEffect(() => {
    const entry = FONT_SCALES.find((s) => s.id === scaleId) ?? FONT_SCALES[1];
    document.documentElement.style.setProperty("--font-scale", String(entry.scale));
  }, [scaleId]);

  const setScaleId = useCallback((id: FontScaleId) => {
    setScale(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage unavailable — session-only preference */
    }
  }, []);

  const value = useMemo(() => ({ scaleId, setScaleId }), [scaleId, setScaleId]);

  return <FontScaleContext.Provider value={value}>{children}</FontScaleContext.Provider>;
};

export const useFontScale = () => {
  const ctx = useContext(FontScaleContext);
  if (!ctx) throw new Error("useFontScale must be used within FontScaleProvider");
  return ctx;
};
