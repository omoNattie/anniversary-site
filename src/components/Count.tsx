import { useState, useEffect } from "react";
import "../styles/count.css"

export default function Counter() {
  const prog = document.getElementById('progress');

  const [result, setResult] = useState<number>(404);
  const [text, setText] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  const today: Date = new Date();
  const anniv: Date = new Date(`${today.getMonth()} 18`);

  const [todays, setToday] = useState<number>(today.getDate());

  const checkDays = () => {
    if(result > 0) 
        setText(`Days left!`);
      else if(result < 0) 
        setText(`Days passed since.`);
      else if(result == 0)
        setText("Its Today!");
  
      if(result == 404) {
        setText("Something went wrong. Date unknown.");
      }
  }

  useEffect(() => {
    setResult(anniv.getDate() - today.getDate());
    checkDays();

  }, [result]);

  useEffect(() => {
    if(result <= 0)
      setProgress(100);
    else if(result >= 0) {
      setProgress((todays * 5.5));
    }

    if(prog) {
      prog.style.width = progress + "%";
    }
  }, [progress]);

  return (
    <>
      <div id="counter" className="main-count count-wrap">
        <div className="grid-text">
          <p id="main-text" className="text-center day">{Math.abs(result)}</p>
          <p className="text-center">{text}</p>
        </div>
          <div id="outer" className="outer-bar">
            <div id="progress" className="inner-bar"></div>
          </div>
      </div>
    </>
  );
}