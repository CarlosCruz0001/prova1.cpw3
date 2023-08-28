import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import './index.css';

function App() {
  const [sentence, setSentence] = useState('');
  const [numberOfChars, setNumberOfChars] = useState(0);
  const [numberOfWords, setNumbersOfWords]= useState(0);

  useEffect(() => {
    const noSpecialchar= sentence.replace(/[^\w\s]/g, '').trim();
    const size = noSpecialchar.length;
    const sizeWords= sentence.split(/\s+/).filter(word => word  !== '').length;
    setNumberOfChars(size);
    setNumbersOfWords(sizeWords)
  }, [sentence]);

  return (
    <>
      <Header title='Contador de palavras e caracteres' instruction='Digite seu texto abaixo' />

      <div className='input'>
        <input 
          type='text'
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <div className='resultados'>Quantidade de caracteres: {numberOfChars}</div>
        <div className='resultados'>Quantidade de Palavras: {numberOfWords}</div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
