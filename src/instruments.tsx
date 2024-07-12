import * as Tone from "tone";

const xylo = new Tone.Sampler({
  urls: {
    C3: "C3.mp3",
    D3: "D3.mp3",
    E3: "E3.mp3",
    F3: "F3.mp3",
    G3: "G3.mp3",
    A3: "A3.mp3",
    B3: "B3.mp3",
    C4: "C4.mp3",
    D4: "D4.mp3",
    E4: "E4.mp3",
    F4: "F4.mp3",
    G4: "G4.mp3",
    A4: "A4.mp3",
    B4: "B4.mp3",
    C5: "C5.mp3",
  },
  release: 1,
  baseUrl: "/tone-icons/xylo-mp3/",
}).toDestination();

const rhodes = new Tone.Sampler({
  urls: {
    C3: "C3.mp3",
    D3: "D3.mp3",
    E3: "E3.mp3",
    F3: "F3.mp3",
    G3: "G3.mp3",
    A3: "A3.mp3",
    B3: "B3.mp3",
    C4: "C4.mp3",
    D4: "D4.mp3",
    E4: "E4.mp3",
    F4: "F4.mp3",
    G4: "G4.mp3",
    A4: "A4.mp3",
    B4: "B4.mp3",
    C5: "C5.mp3",
  },
  release: 1,
  baseUrl: "/tone-icons/rhodes-mp3/",
}).toDestination();

export default function playInstrument(
  seq: Sequence,
  instruments: Instrument[] = ["xylo"]
) {
  const transport = Tone.getTransport();
  transport.stop();
  transport.cancel();
  new Tone.Part((time, note) => {
    if (instruments.includes("xylo")) {
      xylo.triggerAttackRelease(note, "8n", time);
    }

    if (instruments.includes("rhodes")) {
      rhodes.triggerAttackRelease(note, "8n", time);
    }
  }, seq).start();
  transport.start();
}
