import React, { lazy, Suspense, useEffect } from "react";
import Head from "../../../components/Head";
import Loading from "../../../components/LoadingPage";
import ErrorMessage from "../../../components/ErrorMessage";
import {} from "./style";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../services/api.js";
const StatusGraph = lazy(() => import("../../../components/StatusGraph"));

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
      <Suspense fallback={<div></div>}>
        <Head title="Statistics" descripton="Statistics" />
        <StatusGraph data={data} />
      </Suspense>
    );
  return null;
};

export default Statistics;
