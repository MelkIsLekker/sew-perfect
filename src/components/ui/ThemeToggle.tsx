"use client";

import React, { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"linen" | "sage">("linen");

  useEffect(() => {
    const saved = localStorage.getItem("sew-perfect-theme") as "linen" | "sage" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const handleToggle = (newTheme: "linen" | "sage") => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("sew-perfect-theme", newTheme);
  };

  return (
    <div className="inline-flex items-center p-1 bg-surface border border-borderline rounded-full shadow-xs">
      <button
        type="button"
        onClick={() => handleToggle("linen")}
        className={`flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full transition-all duration-300 ${
          theme === "linen"
            ? "bg-primary text-white shadow-xs font-medium"
            : "text-muted hover:text-primary"
        }`}
        aria-label="Switch to Warm Linen palette"
      >
        <span className="w-2 h-2 rounded-full bg-[#B38E5D]" />
        <span>Warm Linen</span>
      </button>

      <button
        type="button"
        onClick={() => handleToggle("sage")}
        className={`flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full transition-all duration-300 ${
          theme === "sage"
            ? "bg-primary text-white shadow-xs font-medium"
            : "text-muted hover:text-primary"
        }`}
        aria-label="Switch to Botanical Sage palette"
      >
        <span className="w-2 h-2 rounded-full bg-[#486854]" />
        <span>Botanical Sage</span>
      </button>
    </div>
  );
}