import React from 'react';
import ApiChainBuilder from '../components/ApiChainBuilder';
import ApiDisplay from '../components/ApiDisplay';
import useApiChain from '../hooks/apiChain';
import SideBar from '../components/SideBar';
import HeaderSideBar from '../components/HeaderSideBar';
import TestingField from '../components/TestingField';

const Dashboard = () => {
  const { data, loading, error, chainApis } = useApiChain();

  return (
    <div className="text-white flex" style={{ height: '100vh' }} >
        <SideBar/>
        <TestingField/>
        <HeaderSideBar/>
    </div>
  );
};

export default Dashboard;




{/* <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>
<ApiChainBuilder onChainApis={chainApis} />
<ApiDisplay data={data} loading={loading} error={error} /> */}