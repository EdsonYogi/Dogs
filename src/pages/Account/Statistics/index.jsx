import React, { useEffect } from "react";
import Head from "../../../components/Head";
import Loading from "../../../components/LoadingPage";
import ErrorMessage from "../../../components/ErrorMessage";
import StatusGraph from "../../../components/StatusGraph";
import {} from "./style";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../services/api.js";

const Statistics = () => {
  const { data, error, loading, request } = useFetch();
  useEffect(() => {
    const { url, options } = STATS_GET();
    const fetchStats = async () => {
      await request(url, options);
    };
    fetchStats();
  }, [request]);

  if (loading) <Loading />;
  if (error) <ErrorMessage>{error}</ErrorMessage>;
  if (data)
    return (
      <div>
        <Head title="Statistics" descripton="Statistics" />
        <StatusGraph data={data} />
      </div>
    );
  return null;
};

export default Statistics;
