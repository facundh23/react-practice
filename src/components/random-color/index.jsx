import { useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateHexRandomColor = () => {};
  const handleCreateRgbRandomColor = () => {};

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateHexRandomColor
            : handleCreateRgbRandomColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
};
