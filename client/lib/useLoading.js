import { useEffect, useState } from "react";

export function useLoading(loadingFunction) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(false);

  async function load() {
    try {
      setIsLoading(true);
      setData(await loadingFunction());
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);
  return { isLoading, error, data };
}
