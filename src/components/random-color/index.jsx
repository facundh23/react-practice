import { useEffect, useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleRandomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateHexRandomColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[handleRandomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };
  const handleCreateRgbRandomColor = () => {
    const r = handleRandomColorUtility(256);
    const g = handleRandomColorUtility(256);
    const b = handleRandomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRgbRandomColor();
    } else {
      handleCreateHexRandomColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        padding: "20px",
      }}
    >
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setTypeOfColor("hex")}
      >
        Create HEX Color
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setTypeOfColor("rgb")}
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateHexRandomColor
            : handleCreateRgbRandomColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
};
