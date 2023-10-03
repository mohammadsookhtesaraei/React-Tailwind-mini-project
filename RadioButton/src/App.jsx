import React, { useReducer } from "react";

const initialState = {
  first: true,
  second: true,
  third: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "STARTUP":
      return {
        first: false,
        second: true,
        third: true,
      };

    case "Business":
      return {
        first: true,
        second: false,
        third: true,
      };

    case "ENTERPRISE":
      return {
        first: true,
        second: true,
        third: false,
      };

    default:
      return state;
  }
};

const App = () => {
  const [show, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-blue-600 flex items-center justify-center h-screen">
      <div className="flex flex-col gap-y-4 w-full max-w-md">
        <div
          onClick={() => dispatch({ type: "STARTUP" })}
          className={
            show.first
              ? "bg-white flex items-center justify-between p-4 rounded-lg ring-4 ring-blue-300"
              : "bg-sky-900 flex items-center justify-between p-4 rounded-lg ring-4 ring-blue-300 text-white"
          }
        >
          <div>
            <p className="font-bold text-lg mb-2">Startup</p>
            <span>12GB/6 CPUs · 160 GB SSD disk</span>
          </div>
          <div
            className={
              show.first
                ? "hidden"
                : "bg-blue-700 flex items-center justify-center rounded-full w-8 h-8"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
        <div
          onClick={() => dispatch({ type: "Business" })}
          className={
            show.second
              ? "bg-white flex items-center justify-between p-4 rounded-lg ring-4 ring-blue-300"
              : "bg-sky-900 flex items-center justify-between p-4 rounded-lg ring-4 ring-blue-300 text-white"
          }
        >
          <div>
            <p className="font-bold text-lg mb-2">Business</p>
            <span>16GB/8 CPUs · 512 GB SSD disk</span>
          </div>
          <div
            className={
              show.second
                ? "hidden"
                : "bg-blue-700 flex items-center justify-center rounded-full w-8 h-8"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
        <div
          onClick={() => dispatch({ type: "ENTERPRISE" })}
          className={
            show.third
              ? "bg-white flex items-center justify-between p-4 rounded-lg ring-4 ring-blue-300"
              : "bg-sky-900 flex items-center justify-between p-4 rounded-lg ring-4 ring-blue-300 text-white"
          }
        >
          <div>
            <p className="font-bold text-lg mb-2">Enterprise</p>
            <span>32GB/12 CPUs · 1024 GB SSD disk</span>
          </div>
          <div
            className={
              show.third
                ? "hidden"
                : "bg-blue-700 flex items-center justify-center rounded-full w-8 h-8"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
