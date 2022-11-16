// function MyButton(){
//   return (
//     <button>
//       Submit Button
//     </button>
//   );
// }

// const user ={
//   name:"Sikandar Chauhan",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// export default function MyApp(){
//   return (
//     <div>
//     <h1>WelCome To My First React App</h1>
//     <h2>{user.name}</h2>
//     <img className="avatar"
//     src={user.imageUrl}
//     alt={"Photo of "+ user.name}
//     style={{
//       width:user.imageSize,
//       height: user.imageSize
//     }
//     }
//      />

//     <MyButton />
//     </div>
//   );
// }
import { useState } from "react"

 function MyButton(){
  const [count , setCount] = useState(0);
  function handleClick(){
    // alert(setCount(count +1))
    setCount(count +1) 
  }
  return (
    <button onClick={handleClick}>
      Click Me {count} times
    </button>
  )
}

export default function MyApp(){
  return(
    <div>
      <h1>Counters that update sepeately</h1>
      <MyButton />
      <MyButton />
    </div>
  )
}


