import OpenAI from 'openai-api';
import { useState } from 'react';
import Form from './Form'
import TextContainer from './TextContainer'

const openai = new OpenAI(process.env.REACT_APP_OPENAI_KEY);

function App() {
  const [text, setText] = useState('');

  const handleSubmit = (data) => {
    console.log('handle submit');
    const { name, subjective, objective } = data;
    const prompt = `Write a short story about ${name}. ${name}'s pronouns are ${subjective}/${objective}.`;

    (async () => {
      const gptResponse = await openai.complete({
        engine: 'text-davinci-002',
        prompt,
        maxTokens: 256,
        temperature: .7,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
      });

      setText(gptResponse.data.choices[0].text);
    })();
  };

  return (
    <main className="app">
      <h1 className="visually-hidden">Try Pronouns</h1>
      <Form onSubmit={handleSubmit} />
      <TextContainer text={text} />
    </main>
  );
}

export default App;
