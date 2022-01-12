import React, {useState, useEffect} from 'react';
import Team from './components/Team';

export default function App() 
{
    let arr = ["active","disactive","disactive","disactive","disactive","disactive"];
    const [property, setProperty] = useState(arr);
    const[index,setIndex] = useState(0);
    useEffect(()=> {
        setTimeout(() => {
          let prev = index;
          if (prev ===  5)
            setIndex(0);
          else
            setIndex(prev+1);
          arr.fill("disactive");
          arr[index] = "active";
          setProperty(arr);
        }, 5000);
    });
    return (
      <>
        <Team property={property} />
      </>
    );
}
