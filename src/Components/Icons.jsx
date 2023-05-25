import React from 'react'
import { AiFillApi } from "react-icons/ai";
import { MdAccountBalance ,MdAndroid} from "react-icons/md";
import { IconContext} from "react-icons";

const Icons = () => {
  return (
    <IconContext.Provider value={{color:'purple',size:"5rem"}} >
        <div> 
      {/* <AiFillApi color='red' size="10rem" />
      <MdAccountBalance color='purple' size="10rem" /> */}
      <AiFillApi />
      <MdAccountBalance />
      <MdAndroid size={'7rem'} color='green' />
    </div>
    </IconContext.Provider>
    // <div>

    // </div>
  )
}

export default Icons
