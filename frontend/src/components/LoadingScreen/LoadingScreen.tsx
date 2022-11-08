// global
import React from 'react'
// recoil atoms
import {useRecoilValue} from "recoil";
import {loadingScreenAtom} from "../../recoilAtoms/loadingAtom";
// styles and icons
import './LoadingScreen.scss';
// components
import LoaderIcon from "../LoaderIcon/LoaderIcon";

interface LoadingScreenProps {
  transition?: number
}

// TODO: Fix bug with empty space
function LoadingScreen({transition=600}: LoadingScreenProps) {
  const isActive = useRecoilValue(loadingScreenAtom)
  
  const toggleScrollOnActive = () => {
    const body = document.querySelector('body')
    if (!body) return
    
    if (isActive) {
      body.style.overflow = 'hidden'
    }
    else {
      setTimeout(() => {
        body.style.removeProperty('overflow')
      }, transition)
    }
  }
  
  React.useEffect(() => {
    toggleScrollOnActive()
  }, [isActive])
  
  return (
    <div
      className={`loading-screen ${isActive && 'active'}`}
      style={{"--transition": `${transition}ms`} as React.CSSProperties}
    >
      <div className="loading-screen__side side-left">
        <LoaderIcon className="side__icon" />
        <h2 className="side__text">ЗАГРУЗКА...</h2>
      </div>
      <div className="loading-screen__side side-right">
        <LoaderIcon className="side__icon" />
        <h2 className="side__text">ЗАГРУЗКА...</h2>
      </div>
    </div>
  )
}

export default LoadingScreen
