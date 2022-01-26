import { useEffect } from "react";
import cookieCutter from "cookie-cutter";

export default function useThemeSetter({ theme, isRobot }) {
  useEffect(() => {
    // Only run if not spider bot
    if (!isRobot) {
      cookieCutter.set("theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, []);
}
