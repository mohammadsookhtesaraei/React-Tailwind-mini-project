import React ,{useReducer} from 'react';

const initialState = {
  first:true,
  second:true,
  third:true,
}

const reducer = (state,action) => {
  switch(action.type) {
    case "STARTUP" : 
    return {
      first:false,
      second:true,
      third:true
    }

    case "Business" :
      return {
        first:true,
        second:false,
        third:true
      }

      case  "ENTERPRISE" :
        return {
          first:true,
          second:true,
          third:false,
        }

        default : return state;
  
  }
}


const App = () => {

  const [show,dispatch] =useReducer(reducer,initialState);
  return (
    <div className='bg-blue-600 flex items-center justify-center h-screen'>
      
    </div>
  );
}

export default App;
