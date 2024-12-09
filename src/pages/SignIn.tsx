import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sign in attempted",
      description: "This is a demo. Sign in functionality is not implemented.",
    });
  };

  return (
    <div className="min-h-screen hero-gradient">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 bg-white/5 text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 bg-white/5 text-white"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-white text-black hover:bg-gray-100">
              Sign In
            </Button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;