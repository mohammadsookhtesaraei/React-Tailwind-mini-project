import React, { useState } from "react";

const App = () => {
  
  // set boolean state
  const [show,setShow]=useState(false);

  return (
    // parent div
    <div className="bg-gray-100 flex items-center justify-center h-screen" >
      {/* second div */}
      <div className="relative">
        {/* first button */}
        <button onClick={()=> setShow(!show)} className={show ? "bg-blue-500 relative z-10  text-white px-4 py-2 rounded-lg inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white" : "bg-blue-500 relative z-10 text-white px-4 py-2 rounded-lg inline-flex items-center "} >
          <span>show more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {/* second button */}
        <button onClick={()=> setShow(false)} className={show ? "fixed inset-0 bg-gray-300" : ""}></button>

        {/* third div */}
        <div className={show ? " bg-gray-100 w-56 overflow-hidden rounded-lg mt-2 absolute" : "hidden"}>
          <a className="block p-2 hover:bg-blue-400 hover:text-white transition duration-300 ease-in " href="#">Account</a>
          <a className="block p-2 hover:bg-blue-400 hover:text-white transition duration-300 ease-in" href="#">Support</a>
          <a className="block p-2 hover:bg-blue-400 hover:text-white transition duration-300 ease-in" href="#">Setting</a>
        </div>
      </div>
    </div>
  );
};

export default App;
