import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  //  Avoid Hydration Mismatch
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div>
      {isDark ? (
        <Moon className="cursor-pointer" onClick={() => setTheme("light")} />
      ) : (
        <Sun className="cursor-pointer" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}

export default ThemeChanger;
