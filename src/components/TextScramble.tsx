"use client";

import React, { useEffect, useRef, useState } from "react";

const chars = "!<>-_\\/[]{}--=+*^?#________";

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

export default function TextScramble({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const queueRef = useRef<QueueItem[]>([]);
  const frameCounter = useRef(0);

  useEffect(() => {
    const length = Math.max(text.length, display.length);
    const queue: QueueItem[] = [];
    for (let i = 0; i < length; i++) {
      const from = display[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }
    queueRef.current = queue;
    frameCounter.current = 0;

    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end, char } = queue[i];
        if (frameCounter.current >= end) {
          complete++;
          output += to;
        } else if (frameCounter.current >= start) {
          if (!char || Math.random() < 0.28) {
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = randomChar;
            output += randomChar;
          } else {
            output += char;
          }
        } else {
          output += from;
        }
      }
      setDisplay(output);
      frameCounter.current++;
      if (complete < queue.length) {
        frameRef.current = requestAnimationFrame(update);
      }
    };

    frameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRef.current);
  }, [text]);

  return <span className={className}>{display}</span>;
}
