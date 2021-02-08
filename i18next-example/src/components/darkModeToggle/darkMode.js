import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function DarkMode({ theme, setTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setIsDarkMode(localTheme === "light" ? false : true);
      setTheme(localTheme);
    } else {
      setIsDarkMode(false);
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setIsDarkMode(true);
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <DarkModeToggle onChange={toggleTheme} checked={isDarkMode} size={50} />
  );
}

export default DarkMode;

// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/#top-of-site
