import "./Votes.css";
import { useState } from "react";
export default function Votes() {
  const [chocolate, setChocolate] = useState(0);
  const [vanilla, setVanilla] = useState(0);
  const [strawberry, setStrawberry] = useState(0);
  const totalVotes = chocolate + vanilla + strawberry;

  const chocolatePercentages = (chocolate / totalVotes) * 100;
  const vanillaPercentages = (vanilla / totalVotes) * 100;
  const strawberryPercentages = (strawberry / totalVotes) * 100;

  const noVotes = "No votes yet.";

  const chocolateGraph = {
    width: chocolatePercentages + "%",
    backgroundColor: "#4f2c2c",
    height: "20px",
  };
  const vanillaGraph = {
    width: vanillaPercentages + "%",
    backgroundColor: "#cbc0ac",
    height: "20px",
  };
  const strawberryGraph = {
    width: strawberryPercentages + "%",
    backgroundColor: "pink",
    height: "20px",
  };

  return (
    <div className="Votes">
      <h1>Vote Here</h1>
      <div className="buttons">
        <button
          onClick={() => {
            setChocolate(chocolate + 1);
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setVanilla(vanilla + 1);
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setStrawberry(strawberry + 1);
          }}
        >
          Strawberry
        </button>
      </div>

      <div className={totalVotes > 0 ? "hidden" : ""}>
        <p>{noVotes}</p>
      </div>

      <div className={totalVotes === 0 ? "hidden" : ""}>
        <div className={chocolate === 0 ? "hidden" : ""}>
          <p>
            Chocolate:{chocolate} ({Math.round(chocolatePercentages).toFixed(1)}
            %)
          </p>
          <div style={chocolateGraph}></div>
        </div>

        <div className={vanilla === 0 ? "hidden" : ""}>
          <p>
            Vanilla:{vanilla} ({Math.round(vanillaPercentages).toFixed(1)}%)
          </p>
          <div style={vanillaGraph}></div>
        </div>
        <div className={strawberry === 0 ? "hidden" : ""}>
          <p>
            Strawberry: {strawberry} (
            {Math.round(strawberryPercentages).toFixed(1)}%)
          </p>
          <div style={strawberryGraph}></div>
        </div>
      </div>
    </div>
  );
}
