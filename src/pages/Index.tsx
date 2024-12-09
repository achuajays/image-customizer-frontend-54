import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Financial infrastructure to grow your revenue
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Join the millions of companies of all sizes that use our platform to
                accept payments online and in person, embed financial services, and
                build more profitable businesses.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact sales
                </button>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <StatsCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;