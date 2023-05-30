import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';


export function useChatGPT(prompt: string) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configuration = new Configuration({
          apiKey,
        });
        const messages: any = [
          {
            role: 'system',
            content:
              'You are an house automative assistant. You have to help to the user to control the house. You can search things in your storage and you can control the lights and the temperature. You can also help to the user to find things in the house.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ];

        const openai = new OpenAIApi(configuration);

        const completion: any = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: messages,
        });

        setResponse(completion.data.choices[0].message.content);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setResponse(null);
      }
    };

    fetchData();
  }, [prompt]);

  return { response, error };
}
