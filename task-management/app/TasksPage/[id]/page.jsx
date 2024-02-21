import TaskForm from "@/app/(components)/TaskForm";
import React from "react";

const getTaskById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TasksPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTaskData = {};

  if (EDITMODE) {
    updateTaskData = await getTaskById(params.id);
    updateTaskData = updateTaskData.foundTask;
  } else {
    updateTaskData = {
      _id: "new",
    };
  }
  return <TaskForm task={updateTaskData} />;
};

export default TasksPage;
