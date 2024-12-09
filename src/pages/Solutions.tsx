import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions for Every Business
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover how our platform can help transform your business operations
              and drive growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Enterprise Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                Scalable solutions for large organizations with complex needs.
                Including custom integrations, dedicated support, and advanced security features.
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Small Business</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                Perfect for growing businesses. Get started quickly with our
                intuitive platform and essential features at an affordable price.
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Startups</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                Built for rapid growth. Access powerful tools and flexible
                pricing that scales with your business.
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;