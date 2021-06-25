import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faeShowFlag, setFaeShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitcShowFlag = () => {
    setFaeShowFlag(!faeShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faeShowFlag || setFaeShowFlag(true);
      } else {
        faeShowFlag && setFaeShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitcShowFlag}>on/of</button>
      <p>{num}</p>
      {faeShowFlag && <p>(*´ω｀)</p>}
    </>
  );
};

export default App;
