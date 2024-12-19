import {useEffect} from 'react';

export const Title = () => {
    useEffect(()=>{
        let interval= setInterval(()=>{
            console.log("Rendering")
        }, 1000);
    
      return ()=>{
        console.log("Unmount");
        clearInterval(interval);
     };  
    }, []);
  return (
    <div>
      <h1>MERN stack Course</h1>
    </div>
  )
}

