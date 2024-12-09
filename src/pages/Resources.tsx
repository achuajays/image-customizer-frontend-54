import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resources & Learning
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to succeed with our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Documentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Comprehensive guides and API references to help you integrate and build.
                </p>
                <Button variant="outline" className="w-full">
                  View Docs
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Tutorials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Step-by-step tutorials to help you get the most out of our platform.
                </p>
                <Button variant="outline" className="w-full">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Blog</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Latest updates, best practices, and insights from our team.
                </p>
                <Button variant="outline" className="w-full">
                  Read Blog
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

export default Resources;