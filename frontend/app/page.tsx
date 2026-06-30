"use client";
import { useState } from "react";

type Chord = {
  name: string;
  notes: string[];
}



export default function Home() {
  const [message, setMessage] = useState("");
  const [chords, setChords] = useState<Chord[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);

    //mock data
    setChords([
      { name: "Cm9", notes: ["C", "Eb", "G", "Bb", "D"] },
      { name: "Abmaj7", notes: ["Ab", "C", "Eb", "G"] },
      { name: "Fm9", notes: ["F", "Ab", "C", "Eb", "G"] },
      { name: "G7alt", notes: ["G", "B", "D", "F", "Ab"] },
    ]);
    setLoading(false)

  }
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-5xl font-bold">AI MIDI Chord Generator</h1>
          <p className="text-zinc-400 mt-3">
            Ask the chatbot for a chord progression and export it as MIDI.
          </p>
        </section>

        <section className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">Chatbot</h2>

          <div className="flex gap-3">
            <input
              className="flex-1 rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none"
              placeholder="Make a dark jazzy 4-bar progression in C minor..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-medium"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </section>

        <section className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">MIDI Display</h2>

          {chords.length === 0 ? (
            <p className="text-zinc-500">No progression generated yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {chords.map((chord, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 border border-zinc-700 rounded-xl p-4"
                >
                  <p className="text-sm text-zinc-400">Bar {index + 1}</p>
                  <h3 className="text-2xl font-bold mt-1">{chord.name}</h3>
                  <p className="text-zinc-300 mt-2">
                    {chord.notes.join(" - ")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
