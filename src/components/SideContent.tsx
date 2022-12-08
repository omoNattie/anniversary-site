interface IStatus {
    active: boolean;
    month: number;
};

export default function SideMenuInner({active, month}: IStatus): JSX.Element {
    return (
        <>
        <div id="menu" className={active ? "menu menu-visible" : "menu"}>
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
        </>
        
    )
};