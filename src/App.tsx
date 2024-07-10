import "./App.css";
import playXylo from "./xylo";

const progressSeq: Sequence = [
  ["0:0:0", "C3"],
  ["0:0:1", "E3"],
  ["0:0:2", "G3"],
  ["0:0:3", "D3"],
  ["0:1:0", "F3"],
  ["0:1:1", "A3"],
  ["0:1:2", "E3"],
  ["0:1:3", "G3"],
  ["0:2:0", "B3"],
  ["0:2:1", "C4"],
];

const sadSeq: Sequence = [
  ["0:0:0", "C4"],
  ["0:1:0", "C4"],
  ["0:1:2", "C3"],
];

const victorySeq: Sequence = [
  ["0:0:0", "C3"],
  ["0:0:0", "E3"],
  ["0:0:0", "G3"],

  ["0:1:0", "F3"],
  ["0:1:0", "A3"],
  ["0:1:0", "E3"],

  ["0:2:0", "G3"],
  ["0:2:0", "B3"],
  ["0:2:0", "D4"],

  ["0:2:2", "G3"],
  ["0:2:2", "B3"],
  ["0:2:2", "D4"],
];

function App() {
  return (
    <>
      <button onClick={() => playXylo(progressSeq)}>Play Progress</button>
      <button onClick={() => playXylo(sadSeq)}>Play Sad</button>
      <button onClick={() => playXylo(victorySeq)}>Play Victory</button>
    </>
  );
}

export default App;
