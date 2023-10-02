import React, {useRef, useEffect, useState} from 'react'

const Landing = () => {
 const [btn, setBtn] = useState(false); 
  const refWolverine = useRef(null); 

  useEffect(()=>{
    // elle execute au moment du montage : 
    // console.log("Je suis dans le useEffect ! ")
    refWolverine.current.classList.add("startingImg");   
    setTimeout(() => {
      // enlever au bout de 4s 
      refWolverine.current.classList.remove("startingImg");   
    }, 4000);
  }, [])
   console.log(refWolverine );
  return (
    <main ref= {refWolverine}  className='welcomePage'>
        <div className='leftBox'>
          <button className='btn-welcome'>Inscription</button>
        </div>
        <div className='rightBox'>
          <button className='btn-welcome'>Connexion </button>
        </div>

    </main>
  )
}

export default Landing;
