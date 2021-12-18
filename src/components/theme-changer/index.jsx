import { useTheme } from "next-themes";
import styles from "./theme-changer.module.css";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

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
