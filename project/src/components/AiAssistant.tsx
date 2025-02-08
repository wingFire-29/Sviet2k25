import React, { useState } from 'react';
import { Bot } from 'lucide-react';

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4 mb-4 transform transition-all duration-200 ease-out">
          <div className="text-gray-800">
            <h3 className="font-semibold mb-2">AI Assistant</h3>
            <p className="text-sm text-gray-600 mb-4">How can I help you today?</p>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
              <button className="text-sm text-peach-600 hover:text-peach-700 block mb-2">Book a ride</button>
              <button className="text-sm text-peach-600 hover:text-peach-700 block mb-2">Check fare</button>
              <button className="text-sm text-peach-600 hover:text-peach-700 block">Contact support</button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-peach-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );
}