import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const NewTasks = () => {
  const [page, setpage] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const limit = 9;
  // http://localhost:4000/api/v1/task?page=${page}&limit=${limit}

  const getTasks = async () => {
    try {
      const response = await axios.get(`task.json`);
      return response?.data;
    } catch (error) {
      throw error.message;
    }
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks", page, limit],
    queryFn: getTasks,
  });

  let pages = [];
  for (let i = 0; i < data?.totalPages; i++) {
    pages.push(i);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-[80%] mx-auto  mt-2">
      <div className="flex sm:flex-col lg:flex-row sm:ml-20 lg:ml-0 sm:gap-2 lg:gap-0 justify-between py-2">
        <h2 className="text-2xl font-bold text-blue-900">New Tasks</h2>
        <div className="pr-8">
          <SearchBar placeholder="Task search" />
          <Button buttonText="Search" customStyle="px-2" />
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-row sm:flex-col sm:mx-auto sm:ml-20 lg:ml-0 sm:gap-2 lg:gap-5 justify-start lg:mr-6 mt-2">
        {data?.map((task, index) => (
          <Card
            key={index}
            cardInfo={{
              title: task.taskName,
              status: task.taskStatus,
              description: task.description,
              customStyle: "lg:w-[32%] sm:w-[75%] ",
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <p>{task.deadline.split("T")[0]}</p>
                <Icon icon="line-md:edit-twotone" className="cursor-pointer" />
                <Icon icon="ic:baseline-delete" className="cursor-pointer" />
              </div>
              <div className="flex gap-1">
                <p className="bg-blue-400 text-white px-2 text-sm">
                  {task.taskRecurring}
                </p>
                <p className="bg-blue-400 text-white px-2 text-sm">
                  {task.priority}
                </p>
                <p className="bg-blue-400 text-white px-2 text-sm">
                  {task.taskVisibility}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => {
              setpage(page + 1);
              setActivePage(page);
            }}
            className={`border-2 border-blue-600 px-2 ${
              activePage === page ? "bg-blue-400" : ""
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewTasks;
