import { useEffect, useState } from 'react';

import Counter from './components/Count';
import SideMenu from './components/SideMenu';

import Heart from "./assets/images/heart-arrow.svg";

import "./styles/index.css"
import "./styles/buttons.css"

function App() {
  const messages: string[] = [
    "arisear",
    "arseuar",
    "aro,",
    "ares",
  ];
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(messages[Math.floor(Math.random() * messages.length)]);
  }, [text])

  const open = () => {
    window.open("https://discord.com/channels/@me");
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <main>
        <aside>
          <SideMenu/>
        </aside>
        
        <div className='flex-center'>
          <Counter />
          <div className='flex-evenly'>
            <button className='button-base send' onClick={open}>
              <img className="button-heart" src={Heart} alt="send-text" />
            </button>
            <p className='test'>Mesage to be sent: {text}</p>
          </div>
        </div>
      </main>
    </>
  )
};

export default App;
