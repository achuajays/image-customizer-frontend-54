import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Developers = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Developer Resources
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to integrate our platform into your applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">API Reference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Complete API documentation with examples and integration guides.
                </p>
                <Button variant="outline" className="w-full">
                  View API Docs
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">SDKs & Libraries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Official SDKs for popular programming languages and frameworks.
                </p>
                <Button variant="outline" className="w-full">
                  Browse SDKs
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Sample Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Example implementations and starter projects to help you get started quickly.
                </p>
                <Button variant="outline" className="w-full">
                  View Examples
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Developers;