const ApiChainBuilder = ({ onChainApis }) => {
  return (
    <div className="p-4">
      <button
        onClick={onChainApis}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start API Chain
      </button>
    </div>
  );
};

export default ApiChainBuilder;
