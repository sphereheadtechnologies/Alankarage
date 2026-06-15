import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is fully rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash, key]);

  return null;
}
