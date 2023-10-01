import { useState, useCallback } from "react";
import { getCachedHeaders } from "@/app/lib/backend";

export default function useFetchUser() {
  const [loading, setLoading] = useState<null | boolean>(null);
  const [data, setData] = useState(null);

  const fetchWithAuth = useCallback(async (url: string, options = {}) => {
    setLoading(true);

    const authData = getCachedHeaders();

    if (authData === "err") {
      setLoading(false);
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...authData,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      console.log("useFetchUser err", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, data, fetchWithAuth };
}
