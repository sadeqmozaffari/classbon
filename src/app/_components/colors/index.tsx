"use client";
import { tailwindColors } from "../../../../tailwind.config"; 
import { colord } from "colord";

const getTextColor = (backgroundColor: string): string =>
  colord(backgroundColor).isDark() ? "#ddd" : "#333";

export const Colors: React.FC = () => (
  <div lang="en" className="flex flex-wrap justify-center" dir="ltr">
    {Object.entries(tailwindColors).map(([name, color]) => (
      <ColorBox key={name} name={name} color={color} />
    ))}
  </div>
);

export const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => (
  <div
    className="w-96 h-60 flex flex-col items-center justify-center text-center uppercase"
    style={{ backgroundColor: color, color: getTextColor(color) }}
  >
    <span>{name}</span>
    <span>{color}</span>
  </div>
);
