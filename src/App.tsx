import { useState } from "react";
import "./App.css";
import playInstrument from "./instruments";
import {
  generateRandom7ths,
  progressSeq,
  sadSeq,
  victorySeq,
} from "./sequences";

function App() {
  const [instruments, setInstruments] = useState<Array<Instrument>>(["xylo"]);

  function toggleInstrument(inst: Instrument) {
    if (instruments.includes(inst)) {
      setInstruments(instruments.filter((i) => i !== inst));
    } else {
      setInstruments([...instruments, inst]);
    }
  }

  return (
    <>
      <div>
        <button onClick={() => playInstrument(progressSeq, instruments)}>
          Play Progress
        </button>
        <button onClick={() => playInstrument(sadSeq, instruments)}>
          Play Sad
        </button>
        <button onClick={() => playInstrument(victorySeq, instruments)}>
          Play Victory
        </button>
        <button
          onClick={() => playInstrument(generateRandom7ths(), instruments)}
        >
          Play Random 7ths
        </button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={instruments.includes("xylo")}
            onChange={() => toggleInstrument("xylo")}
          />
          Xylophone
        </label>
        <label>
          <input
            type="checkbox"
            checked={instruments.includes("rhodes")}
            onChange={() => toggleInstrument("rhodes")}
          />
          Rhodes
        </label>
      </div>
    </>
  );
}

export default App;
