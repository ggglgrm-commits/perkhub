const TrustBadges = () => {
  return (
    <section className="w-full py-4 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm md:text-base text-gray-700">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span className="font-medium">Secure</span>
          </div>
          <div className="text-gray-400">|</div>
          <div className="flex items-center gap-2">
            <span>✅</span>
            <span className="font-medium">Verified Offers</span>
          </div>
          <div className="text-gray-400">|</div>
          <div className="flex items-center gap-2">
            <span>💌</span>
            <span className="font-medium">Instant Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
