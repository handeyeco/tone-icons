import * as Tone from "tone";

const sampler = new Tone.Sampler({
  urls: {
    C3: "C3.wav",
    D3: "D3.wav",
    E3: "E3.wav",
    F3: "F3.wav",
    G3: "G3.wav",
    A3: "A3.wav",
    B3: "B3.wav",
    C4: "C4.wav",
    D4: "D4.wav",
    E4: "E4.wav",
  },
  release: 1,
  baseUrl: "/tone-icons/xylo/",
}).toDestination();

export default function playXylo(seq: Sequence) {
  const transport = Tone.getTransport();
  new Tone.Part((time, note) => {
    sampler.triggerAttackRelease(note, "8n", time);
  }, seq).start();
  transport.start();
}
