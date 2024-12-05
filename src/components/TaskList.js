import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks); // de todo el estado solo quiero el estado de las tareas
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-full sm:w-4/6 px-4">
      <header className="flex justify-between items-center py-4">
        <h1>Task List {tasks.length}</h1>
        <Link
          to="/create"
          className="bg-indigo-800 px-4 py-2 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 rounded-md text-sm"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 rounded-md text-sm self-center"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
