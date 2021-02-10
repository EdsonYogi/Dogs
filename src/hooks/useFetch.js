import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let responseFetch;
    let dataJson;

    try {
      setError(null);
      setLoading(true);
      responseFetch = await fetch(url, options);
      dataJson = await responseFetch.json();
      if (responseFetch.ok === false) throw new Error(dataJson.message);
    } catch (error) {
      dataJson = null;
      setError(error.message);
    } finally {
      setData(dataJson);
      setLoading(false);
      return { responseFetch, dataJson };
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
