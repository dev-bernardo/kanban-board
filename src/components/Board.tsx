import React from "react";
import Column from "./Column";

const Board: React.FC = () => {
  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      <Column title="To Do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </div>
  );
};

export default Board;
