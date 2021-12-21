import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

import styles from "./theme-changer.module.css";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <MoonIcon className={styles.icon} onClick={() => setTheme("dark")} />
      ) : (
        <SunIcon className={styles.icon} onClick={() => setTheme("light")} />
      )}
    </div>
  );
}

export default ThemeChanger;
