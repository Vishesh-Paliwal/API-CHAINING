import React from 'react';
import ApiChainBuilder from '../components/ApiChainBuilder';
import ApiDisplay from '../components/ApiDisplay';
import useApiChain from '../hooks/apiChain';

const Dashboard = () => {
  const { data, loading, error, chainApis } = useApiChain();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>
      <ApiChainBuilder onChainApis={chainApis} />
      <ApiDisplay data={data} loading={loading} error={error} />
    </div>
  );
};

export default Dashboard;
