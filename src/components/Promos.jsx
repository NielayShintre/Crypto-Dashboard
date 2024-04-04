const Promos = () => {
  return (
    <div className="mt-8 pr-4">
      <div className="w-64 h-32 border border-gray-800 mb-4 p-6 py-3 flex flex-col">
        <div className="font-bold text-lg mb-2">Yield earned</div>
        <div className="text-base mb-4">
          Earn up CO 2.84% APY on your crypto
        </div>
        <div className="flex-grow"></div>
        <div className="text-base font-bold flex justify-between items-center">
          $0.000066 <span className="text-gray-500 text-sm">2.84% APY</span>
        </div>
      </div>

      <div className="w-64 h-32 border border-gray-800 mb-4 p-6 py-3 flex flex-col">
        <div className="font-bold text-lg mb-2">Learn and Earn</div>
        <div className="text-base mb-4">
          Earn up CO 2.84% APY on your crypto
        </div>
        <div className="flex-grow"></div>
        <div className="text-base font-bold text-blue-500">Verify Identity</div>
      </div>
    </div>
  );
};

export default Promos;
