import { useEffect, useState } from "react";

// Custom hook to get the current path
export function useRouter() {
  const [currentPath, setCurrentPage] = useState(window.location.pathname);
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  function navigateTo(path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return {
    currentPath,
    navigateTo,
  };
}
