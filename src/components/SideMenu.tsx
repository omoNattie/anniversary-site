import  { useEffect, useState } from 'react';

import "../styles/sidemenu.css"
import "../styles/cards.css"
import SideMenuInner from './SideContent';

const today: Date = new Date();
const anniv: Date = new Date("November 18");

export default function SideMenu(): JSX.Element  {
  const [active, setActive] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(404);
  
  const ClickHandler = () => 
    setActive(curr => !curr);

  useEffect(() => {
    setMonth(today.getMonth() - anniv.getMonth() - 1);
  }, [month])

  return (
      <>
        <SideMenuInner active={active} month={month}/>

        <div className='flex side-menu'>
          <button className="side-button" onClick={ClickHandler}></button>
        </div> 
      </>
  )
}