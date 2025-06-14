import { useRef, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

// Define the structure for a single line
interface LineData {
  points: number[];
  color?: string;
  strokeWidth?: number;
}

export const Whiteboard = () => {
  const [lines, setLines] = useState<LineData[]>([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    // Start a new line
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    
    // Add the new point to the current line
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    
    // Replace the last line with the updated one
    lines.splice(lines.length - 1, 1, lastLine);
    setLines([...lines]);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div className="w-[80vw] h-[80vh] bg-white shadow-lg rounded-md">
      <Stage
        width={window.innerWidth * 0.8}
        height={window.innerHeight * 0.8}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {/* This is a temporary background, Konva doesn't have a simple bg color */}
          {/* In a real scenario, this would be a Konva.Rect */}

          {/* Render all the lines */}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation="source-over"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
