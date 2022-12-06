import  { useEffect, useState } from 'react';

import "../styles/sidemenu.css"
import "../styles/cards.css"

const today: Date = new Date();
const anniv: Date = new Date("November 18");

export default function SideMenu() {
  const [active, setActive] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(404);
  
  const ClickHandler = () => 
    setActive(curr => !curr);

  useEffect(() => {
    setMonth(today.getMonth() - anniv.getMonth() - 1);
  }, [month])

  return (
      <>
        <div id="menu" className={active ? "menu" : "menu menu-visible"}>
          <article>
            <section>
              <div>
                <p id="month-count" className="text-center day">{month}</p>
                <p className='text-center'>Months you've been dating for</p>
              </div>
            </section>
            <section>
              <div className='card-center wrapper'>
                <div className='card one'>
                  <p className='text-center margin'>I</p>
                </div>
                <div className='card two'>
                  <p className='text-center margin'>Love</p>
                </div>
                <div className='card three'>
                <p className='text-center margin'>You</p>
                </div>
              </div>
            </section>
          </article>
        </div>  

        <div className='flex side-menu'>
          <button className="side-button" onClick={ClickHandler}></button>
        </div> 
      </>
  )
}