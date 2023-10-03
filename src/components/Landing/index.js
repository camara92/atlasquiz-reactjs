import React, { useRef, useEffect, useState, Fragment } from 'react'

const Landing = () => {
  const [btn, setBtn] = useState(false);
  const refWolverine = useRef(null);
  console.log(btn);
  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    // refWolverine.current.textContent= "Daouda"; 
    setTimeout(() => {
      
      refWolverine.current.classList.remove("startingImg");
      // refWolverine.current.textContent= ""; 
      setBtn(true);
    }, 1000);
  }, [])



  const displayBtn = btn && (

    <Fragment>

      <div className='leftBox'>
        <button className='btn-welcome'>Inscription</button>
      </div>
      <div className='rightBox'>
        <button className='btn-welcome'>Connexion </button>
      </div>
    </Fragment>
  )
  //  console.log(refWolverine );
  return (
    <main ref={refWolverine} className='welcomePage'>
      {displayBtn }
    </main>
  )
}

export default Landing;
