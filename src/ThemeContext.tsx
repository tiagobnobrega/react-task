// ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ThemeType } from "./types";

interface ThemeContextValue {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("obsidian");

  const toggleTheme = () => setTheme(t => (t === "obsidian" ? "snow" : "obsidian"));

  // Add/remove body class for background
  React.useEffect(() => {
    document.body.classList.remove("theme-obsidian", "theme-snow");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
