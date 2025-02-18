import React from "react";
import Task from "./Task";

interface ColumnProps {
  title: string;
}

const Column: React.FC<ColumnProps> = ({ title }) => {
  return (
    <div className="w-80 bg-gray-400 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Task title="Sample Task" description="This is a test task." />
    </div>
  );
};

export default Column;
