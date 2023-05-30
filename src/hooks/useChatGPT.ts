import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { MessageProps } from '../components/chat/Message';

type GPTMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const firstMessage: GPTMessage = {
  role: 'system',
  content:
    'You are an house automative assistant, your name is HomeGenius. You have to help to the user to control the house. You can search things in your storage and you can control the lights and the temperature. You can also help to the user to find things in the house.',
};

export function useChatGPT() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;

  const getGPTResponse = async (prompt: MessageProps[]) => {
    setError(null);
    setLoading(true);
    try {
      const configuration = new Configuration({
        apiKey,
      });
      const messages: GPTMessage[] = [firstMessage];
      prompt.forEach((message) => {
        if (message.emissor === 'loading') return;
        messages.push({
          role: message.emissor,
          content: message.messageText,
        });
      });

      const openai = new OpenAIApi(configuration);
      const completion: any = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });

      return completion.data.choices[0].message.content;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, getGPTResponse };
}
