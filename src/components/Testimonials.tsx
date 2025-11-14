const Testimonials = () => {
  const claims = [
    { name: "Emma L.", location: "California", reward: "🎁 Claimed $750 Amazon", time: "2 mins ago", initials: "EL" },
    { name: "John D.", location: "Texas", reward: "🎁 Claimed $750 Apple Pay", time: "5 mins ago", initials: "JD" },
    { name: "Sarah M.", location: "New York", reward: "🎁 Claimed $750 Amazon", time: "8 mins ago", initials: "SM" },
    { name: "Mike R.", location: "Florida", reward: "🎁 Claimed $750 Apple Pay", time: "12 mins ago", initials: "MR" },
  ];

  return (
    <section className="w-full py-6 px-4 bg-white">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-4">
          Recent Claims
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {claims.map((claim, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-white p-3 rounded-lg shadow-sm border-l-4 border-l-green-500 hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-700 flex-shrink-0">
                  {claim.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm leading-tight">
                    {claim.name}
                  </p>
                  <p className="text-gray-600 text-xs leading-tight">
                    {claim.location}
                  </p>
                  <p className="text-green-700 font-medium text-xs mt-0.5">
                    {claim.reward}
                  </p>
                  <p className="text-gray-500 text-[10px] mt-0.5">
                    {claim.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
