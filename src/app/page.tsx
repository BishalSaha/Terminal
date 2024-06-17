"use client";
import { useEffect, useRef, KeyboardEvent } from "react";
import { useChat } from "@ai-sdk/react";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const screenRef = useRef<HTMLDivElement>(null);

  const { messages, input, setInput, handleInputChange, handleSubmit } = useChat();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(new Event("submit") as any);
      setInput("");
    } else if (e.key.length === 1) {
      setInput(input + e.key);
    } else if (e.key === "Backspace") {
      setInput(input.slice(0, -1));
    }
  };

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.focus();
    }
    const currentScreenRef = screenRef.current;
    if (currentScreenRef) {
      currentScreenRef.addEventListener("keydown", handleKeyDown as any);
    }
    return () => {
      if (currentScreenRef) {
        currentScreenRef.removeEventListener("keydown", handleKeyDown as any);
      }
    };
  }, [input]);

  return (
    <div className={styles.terminal}>
      <div className={styles.screen} ref={screenRef} tabIndex={0}>
        <div className={styles.content}>
          <div className={styles.messages}>
            {messages.map((m) => (
              <p key={m.id} className={styles.text}>
                {m.role === "user" ? "User: " : "Agent: "}
                {m.content}
              </p>
            ))}
            <p className={styles.text}>
              {`>`}
              {input}
              <Caret />
            </p>
          </div>
        </div>
        <div className={styles.noise}></div>
        <div className={styles.scanline}></div>
      </div>
    </div>
  );
};

const Caret = () => {
  return <span className={styles.caret}></span>;
};

export default Home;
