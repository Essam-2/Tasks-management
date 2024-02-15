import React from "react";
import TaskCard from "./(components)/TaskCard";

const Dashboard = () => {
  return (
    <div className="p-5 ">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Dashboard;
