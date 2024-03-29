import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TaskCard = ({ id, key, task }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(task.createdAt);

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2 shadow-gray-800">
      <div className="flex mb-3 ">
        <PriorityDisplay priority={task.priority} />
        <div className="ml-auto">
          <DeleteBlock id={task._id} />
        </div>
      </div>
      <Link href={`/TasksPage/${task._id}`} style={{ display: "contents" }}>
        <h4>{task.title}</h4>
        <hr className=" h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{task.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2 ">
          <div className="flex flex-col">
            <p className="text-xs my-1">{createdDateTime}</p>
            <ProgressDisplay progress={task.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={task.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TaskCard;
