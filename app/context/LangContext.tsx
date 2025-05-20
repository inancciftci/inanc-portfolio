"use client";
import React, { createContext, useState, ReactNode } from "react";

interface LangContextI {
  lang: string;
  setLang: (lang: string) => void;
}

export const LanguageContext = createContext<LangContextI>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<string>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
