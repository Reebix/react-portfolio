import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { chromeai } from 'chrome-ai';
import { generateText } from 'ai';
import './App.css';
import './loading-icon.css'



// run using docker-compose up
function App() {
  const [text, setText] = useState("Prompt eingeben und auf 'Neues Zitat' klicken");

  /*
  useEffect(() => {
  getText("antworte nicht!!!").then((response) => {
    setText(response.text);
    console.log(response.text);
  }).catch((error) => {
    console.error(error);
  });
  }, []);
*/


  return (
    <div className="App" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <a className="App-link" href="https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=de&gl=US" target="_blank" rel="noopener noreferrer">Clash of Clans</a>
        
        <a className="App-link" href="https://ai-sdk-chrome-ai.vercel.app/" target="_blank" rel="noopener noreferrer">Chat: </a>

        {text ? <div dangerouslySetInnerHTML={createMarkup(text)}/> : <div className="loading-icon"></div>}
        <div style={{width: '100%', display: 'flex', alignItems: 'center',position: 'fixed', bottom: '0'}}>
          <input type="text" id="promptInput" autoComplete='off' onKeyDown={
            (e) => {
              if (e.key === 'Enter') {
                const newPrompt = document.getElementById("promptInput").value;
                setText();
                getText(newPrompt).then((response) => {
                  setText(response.text);
                  console.log(response.text);
                }).catch((error) => {
                  console.error(error);
                });
              }
            }
          }/>

          <button onClick={() => {
            const newPrompt = document.getElementById("promptInput").value;
            getText(newPrompt).then((response) => {
              setText(response.text);
              console.log(response.text);
            }).catch((error) => {
              console.error(error);
            });
          }}>Prompt gemini nano</button>
        </div>
      </header>
    </div>
  );
}

async function getText(promptInput) {
  return generateText({
    model: chromeai(),
    prompt: promptInput,
  });
}

function createMarkup(text) {
  return { __html: text };
}

export default App;
