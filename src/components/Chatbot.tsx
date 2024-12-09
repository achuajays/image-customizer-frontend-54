import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 bg-primary text-white flex justify-between items-center rounded-t-lg">
            <h3 className="font-semibold">Chat with us</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                Hello! How can I help you today?
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;