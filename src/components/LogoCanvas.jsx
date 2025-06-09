import { useEffect, useRef } from "react";

const LogoCanvas = ({ width = 48, height = 48 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Clear
    ctx.clearRect(0, 0, width, height);
    // Background (transparent)
    // Draw a stylized "H" with geometric/techy look
    // Colors: purples, blues, teals, oranges
    // Left bar
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width * 0.22, height * 0.18);
    ctx.lineTo(width * 0.32, height * 0.18);
    ctx.lineTo(width * 0.32, height * 0.82);
    ctx.lineTo(width * 0.22, height * 0.82);
    ctx.closePath();
    ctx.fillStyle = "#7f5af0"; // purple
    ctx.shadowColor = "#2cb67d"; // teal shadow
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.restore();
    // Right bar
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width * 0.68, height * 0.18);
    ctx.lineTo(width * 0.78, height * 0.18);
    ctx.lineTo(width * 0.78, height * 0.82);
    ctx.lineTo(width * 0.68, height * 0.82);
    ctx.closePath();
    ctx.fillStyle = "#00cfff"; // blue
    ctx.shadowColor = "#ff8906"; // orange shadow
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.restore();
    // Middle connector
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width * 0.32, height * 0.48);
    ctx.lineTo(width * 0.68, height * 0.48);
    ctx.lineTo(width * 0.68, height * 0.58);
    ctx.lineTo(width * 0.32, height * 0.58);
    ctx.closePath();
    ctx.fillStyle = "#ff8906"; // orange
    ctx.shadowColor = "#7f5af0"; // purple shadow
    ctx.shadowBlur = 4;
    ctx.fill();
    ctx.restore();
    // Add a small circle for a techy accent
    ctx.save();
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.28, width * 0.07, 0, 2 * Math.PI);
    ctx.fillStyle = "#2cb67d"; // teal
    ctx.shadowColor = "#00cfff";
    ctx.shadowBlur = 4;
    ctx.fill();
    ctx.restore();
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display: "block", width: width, height: height }}
      aria-label="Hoa Logo"
    />
  );
};

export default LogoCanvas; 