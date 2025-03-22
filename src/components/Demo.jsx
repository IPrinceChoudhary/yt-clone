import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prime = useMemo(()=>findNthPrime(text), [text])
  return (
    <div
      className={
        `m-4 p-2 w-96 h-96 border border-black ${isDarkTheme ? "bg-black text-white" : "bg-white"}`
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200 cursor-pointer"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-black"
        />
      </div>
      <div>
        <h2>nth Prime: {prime}</h2>
      </div>
    </div>
  );
};
export default Demo;
