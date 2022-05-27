import "./AdDesigner.css";
import { useState } from "react";

export default function AdDesigner() {
  const [flavor, setFlavor] = useState("Chocolate");
  const [theme, setTheme] = useState(false);
  const [font, setFont] = useState(12);
  const styles = {
    fontSize: font + "px",
  };
  return (
    <div className="AdDesigner">
      <h1 className="adHeader">Ad Designer</h1>
      <div className={theme ? "ad" : "ad darkTheme"}>
        <p>Vote For</p>
        <h2 style={styles}>{flavor}</h2>
      </div>
      <div>
        <p>What to Support</p>
        <button
          onClick={() => {
            setFlavor("Chocolate");
          }}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setFlavor("Vanilla");
          }}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setFlavor("Strawberry");
          }}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <div>
        <p>Color Theme</p>
        <button
          onClick={() => {
            setTheme(true);
          }}
          disabled={theme}
        >
          Light
        </button>
        <button
          onClick={() => {
            setTheme(false);
          }}
          disabled={!theme}
        >
          Dark
        </button>
      </div>
      <div>
        <p>Font</p>
        <div className="fontButtons">
          <button
            onClick={() => {
              setFont(font + 1);
            }}
          >
            Up
          </button>
          <p>{font}</p>
          <button
            onClick={() => {
              setFont(font - 1);
            }}
          >
            Down
          </button>
        </div>
      </div>
    </div>
  );
}
