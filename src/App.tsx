import { useState } from "react";

export default function ReflexGame() {
  const [szin, setSzin] = useState("yellow");
  const [szvg, setSzvg] = useState("Várj...");
  const [ido, setIdo] = useState(0);

  let intervalId = null;
  let startIdo = 0;

  const startGame = () => {
    setSzin("yellow");
    setSzvg("Várj...");
    setIdo(0);

    setTimeout(() => {
      setSzin("lightgreen");
      setSzvg("KATTINTS!");

      intervalId = setInterval(() => {
 
      }, 10);
    }, Math.random() * 3000 + 1000);
  };

  const click = () => {
    if (szin === "lightgreen") {

      setSzin("lightblue");
      setSzvg(`Időd: ${ido} ms`);
    }
  };

  return (
    <div id="div"
      onClick={click}
      style={{
        border: "2px solid black",
        borderRadius: 10,
        width: 500,
        height: 300,
        backgroundColor: szin,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        userSelect: "none",
        cursor: "pointer",
        position: "relative",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)"
        
        
      }}
    >
      {szvg}

      <button
        onClick={(e) => {
          startGame();
        }}
        style={{ position: "absolute", backgroundColor: "lightgrey", bottom: 10, borderRadius: 5, padding: "10px 10px"}}
      >
        <p id="newtest">ÚJ TESZT INDÍTÁSA</p>
        
      </button>
    </div>
  );
}
