const HowItWorks = () => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-rose-500">1</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Choose Your Reward
            </h3>
            <p className="text-gray-600 text-sm">
              Click on your preferred voucher above
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-rose-500">2</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Complete Simple Steps
            </h3>
            <p className="text-gray-600 text-sm">
              Enter your email and finish 4-5 quick deals
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-rose-500">3</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Receive Your Voucher
            </h3>
            <p className="text-gray-600 text-sm">
              Get your code via email within minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
