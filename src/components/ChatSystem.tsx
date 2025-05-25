
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, MessageCircle } from "lucide-react";

interface ChatSystemProps {
  userType: "farmer" | "buyer";
}

const ChatSystem = ({ userType }: ChatSystemProps) => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: userType === "farmer" ? "Fresh Market Ltd" : "John Doe (Farmer)",
      lastMessage: "Is the price negotiable for bulk purchase?",
      time: "2 hours ago",
      unread: 2,
      avatar: userType === "farmer" ? "FM" : "JD"
    },
    {
      id: 2,
      name: userType === "farmer" ? "Green Grocers" : "Mary Wanjiku (Farmer)",
      lastMessage: "When will the potatoes be ready?",
      time: "5 hours ago",
      unread: 0,
      avatar: userType === "farmer" ? "GG" : "MW"
    }
  ];

  const messages = selectedChat ? [
    { id: 1, sender: "other", text: "Hello! I'm interested in your potatoes.", time: "10:30 AM" },
    { id: 2, sender: "me", text: "Hi! They're fresh and ready for market.", time: "10:32 AM" },
    { id: 3, sender: "other", text: "What's your best price for 200kg?", time: "10:35 AM" },
    { id: 4, sender: "me", text: "For 200kg, I can do KSH 42 per kg.", time: "10:37 AM" },
    { id: 5, sender: "other", text: "Is the price negotiable for bulk purchase?", time: "10:40 AM" }
  ] : [];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Chat List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Messages
          </CardTitle>
          <CardDescription>
            {userType === "farmer" ? "Chat with buyers" : "Chat with farmers"}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {chats.map(chat => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                  selectedChat === chat.id ? 'bg-green-50 border-r-4 border-r-green-500' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-green-100 text-green-600">
                      {chat.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {chat.name}
                      </p>
                      <p className="text-xs text-gray-500">{chat.time}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 truncate">
                        {chat.lastMessage}
                      </p>
                      {chat.unread > 0 && (
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card className="lg:col-span-2">
        {selectedChat ? (
          <>
            <CardHeader className="border-b">
              <CardTitle>
                {chats.find(c => c.id === selectedChat)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-[500px] p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sender === 'me'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'me' ? 'text-green-100' : 'text-gray-500'
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </>
        ) : (
          <CardContent className="flex items-center justify-center h-[500px]">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Select a conversation to start chatting</p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatSystem;
