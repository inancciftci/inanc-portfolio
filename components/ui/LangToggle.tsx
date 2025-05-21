"use client";
import { LanguageContext } from "@/app/context/LangContext";
import { useContext } from "react";

export default function LangToggle() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="">
      <select
        value={lang}
        onChange={(e) => {
          setLang(e.target.value);
        }}
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
    </div>
  );
}
