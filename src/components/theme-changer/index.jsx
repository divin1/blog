import { useTheme } from "next-themes";
import styles from "./theme-changer.module.css";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <div className={styles.wrapper}>
      {isLightTheme ? (
        <MoonIcon className={styles.icon} onClick={() => setTheme("dark")} />
      ) : (
        <SunIcon className={styles.icon} onClick={() => setTheme("light")} />
      )}
    </div>
  );
}

export default ThemeChanger;
