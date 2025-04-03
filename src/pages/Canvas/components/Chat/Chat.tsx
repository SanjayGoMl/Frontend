import React, { useState, ChangeEvent } from 'react';
import { Button, Input } from '@/components'; // Import your components as needed

interface ChatProps {
  onMessageSend: (message: string) => void;
}

export const Chat: React.FC<ChatProps> = ({ onMessageSend }) => {
  const [inputMessage, setInputMessage] = useState<string>(''); // State for the input message

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage(); // Call sendMessage function when Enter is pressed
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    onMessageSend(inputMessage);
    setInputMessage('');
  };

  return (
    <div className="flex mb-1 p-4 fixed bottom-0 left-0 w-full bg-white dark:bg-slate-800">
      <Input
        placeholder="Type your message..."
        value={inputMessage}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputMessage(e.target.value)
        }
        onKeyDown={handleKeyDown}
        className="flex-1 mr-2"
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
};
