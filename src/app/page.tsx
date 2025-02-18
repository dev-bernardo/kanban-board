import React from "react";
import Board from "@/components/Board";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-blue-200 p-8">
      <h1 className="text-3xl font-bold mb-4">Kanban Board</h1>
      <Board />
    </main>
  );
};

export default Home;
