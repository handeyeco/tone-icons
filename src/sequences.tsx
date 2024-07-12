export const progressSeq: Sequence = [
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

export const sadSeq: Sequence = [
  ["0:0:0", "C4"],
  ["0:1:0", "C4"],
  ["0:1:2", "C3"],
];

export const victorySeq: Sequence = [
  ["0:0:0", "C3"],
  ["0:0:0", "E3"],
  ["0:0:0", "G3"],

  ["0:1:0", "F3"],
  ["0:1:0", "A3"],
  ["0:1:0", "C3"],

  ["0:2:0", "G3"],
  ["0:2:0", "B3"],
  ["0:2:0", "D4"],

  ["0:2:2", "G3"],
  ["0:2:2", "B3"],
  ["0:2:2", "D4"],
];

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const majorScale = [
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A3",
  "B3",
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "B4",
  "C5",
];

export function generateRandom7ths() {
  let seq: Sequence = [];
  for (let i = 0; i < 4; i++) {
    const root = getRandomInt(0, 8);
    seq = [
      ...seq,
      [`0:${i}:0`, majorScale[root]],
      [`0:${i}:1`, majorScale[root + 2]],
      [`0:${i}:2`, majorScale[root + 4]],
      [`0:${i}:3`, majorScale[root + 6]],
    ];
  }
  return seq;
}
