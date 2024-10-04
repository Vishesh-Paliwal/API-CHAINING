import React from 'react';
import ApiChainBuilder from '../components/ApiChainBuilder';
import ApiDisplay from '../components/ApiDisplay';
import useApiChain from '../hooks/apiChain';
import SideBar from '../components/SideBar';
import HeaderSideBar from '../components/HeaderSideBar';

const Dashboard = () => {
  const { data, loading, error, chainApis } = useApiChain();

  return (
    <div className="text-white flex" style={{ height: '100vh' }} >
        <SideBar/>
        <div className="w-3/5 h-full bg-regal-blue border-yellow-50 border-x-2">b</div>
        <HeaderSideBar/>
    </div>
  );
};

export default Dashboard;




{/* <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>
<ApiChainBuilder onChainApis={chainApis} />
<ApiDisplay data={data} loading={loading} error={error} /> */}