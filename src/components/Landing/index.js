import React, { useRef, useEffect, useState, Fragment } from 'react'

const Landing = () => {
  const [btn, setBtn] = useState(false);
  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    // refWolverine.current.textContent= "Daouda"; 
    setTimeout(() => {
      
      refWolverine.current.classList.remove("startingImg");
      // refWolverine.current.textContent= ""; 
      setBtn(true);
    }, 1000);
  }, []); 

  const setLeftImg = ()=>{
    refWolverine.current.classList.add("leftImg");
    // console.log("Je suis dans leftimg ");
  }
  const setRightImg = ()=>{
    refWolverine.current.classList.add("rightImg");
    // console.log("Je suis dans leftimg ")
  }
// verfie si la class existe et enlever  :
const clearImg = ()=>{
  if(  refWolverine.current.classList.contains("leftImg")){
    refWolverine.current.classList.remove("leftImg");
  }else if ( refWolverine.current.classList.contains("rightImg")){
    
    refWolverine.current.classList.remove("rightImg");
  }
}

  const displayBtn = btn && (

    <Fragment>

      <div className='leftBox' onMouseOver={setLeftImg} onMouseOut={clearImg}>
        <button className='btn-welcome'>Inscription</button>
      </div>
      <div className='rightBox'  onMouseOver={setRightImg} onMouseOut={clearImg}>
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
