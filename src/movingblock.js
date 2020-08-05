import React, { useState } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations"
import './movingblock.css';
export const Movingblock = () => {
const [blockstate,setblockState] = useState(true);
const [rotatekstate,setrotateState] = useState(true);
const movingblock = useWebAnimations({
    
    keyframes: { transform: [
        'rotateX(70deg) rotateZ(0deg)',
        'rotateX(70deg) rotateZ(360deg)',
      ] },
    timing: { 
        easing: 'steps(100, end)',
        direction: "reverse",
        duration: 2000,
        playbackRate: 1,
        iterations:Infinity
          },
  }
)

var animateframes = {
    transform: [
        'translateZ(-20px)',
        'translateZ(20px)',
    ],
    opacity: [1, .5],
  }

var animateTime =  {
    
    duration: 2000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in',
  }

var array1 = []
array1[0] = useWebAnimations({keyframes: animateframes,timing: {delay: 100, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[1] = useWebAnimations({keyframes: animateframes,timing: {delay: 200, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[2] = useWebAnimations({keyframes: animateframes,timing: {delay: 300, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[3] = useWebAnimations({keyframes: animateframes,timing: {delay: 400, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[4] = useWebAnimations({keyframes: animateframes,timing: {delay: 500, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[5] = useWebAnimations({keyframes: animateframes,timing: {delay: 600, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[6] = useWebAnimations({keyframes: animateframes,timing: {delay: 700, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[7] = useWebAnimations({keyframes: animateframes,timing: {delay: 800, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[8] = useWebAnimations({keyframes: animateframes,timing: {delay: 900, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[9] = useWebAnimations({keyframes: animateframes,timing: {delay: 1000, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[10] = useWebAnimations({keyframes: animateframes,timing: {delay: 1100, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[11] = useWebAnimations({keyframes: animateframes,timing: {delay: 1200, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[12] = useWebAnimations({keyframes: animateframes,timing: {delay: 1300, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[13] = useWebAnimations({keyframes: animateframes,timing: {delay: 1200, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[14] = useWebAnimations({keyframes: animateframes,timing: {delay: 1100, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[15] = useWebAnimations({keyframes: animateframes,timing: {delay: 1000, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[16] = useWebAnimations({keyframes: animateframes,timing: {delay: 900, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[17] = useWebAnimations({keyframes: animateframes,timing: {delay: 800, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[18] = useWebAnimations({keyframes: animateframes,timing: {delay: 700, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[19] = useWebAnimations({keyframes: animateframes,timing: {delay: 600, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[20] = useWebAnimations({keyframes: animateframes,timing: {delay: 500, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[21] = useWebAnimations({keyframes: animateframes,timing: {delay: 400, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[22] = useWebAnimations({keyframes: animateframes,timing: {delay: 300, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[23] = useWebAnimations({keyframes: animateframes,timing: {delay: 200, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});
array1[24] = useWebAnimations({keyframes: animateframes,timing: {delay: 100, duration: animateTime.duration,iterations: animateTime.iterations,direction: animateTime.direction,easing: animateTime.easing}});

const controlblock = ()=>{
  
  if(blockstate){
  array1.forEach(function(anim) {
    anim.getAnimation().pause()    
  })} else {
    array1.forEach(function(anim) {
      anim.getAnimation().play()    
    })}
setblockState(!blockstate)

}

const controlrotate = ()=>{
  
  if(rotatekstate){
  movingblock.getAnimation().pause()    
  } else {
    movingblock.getAnimation().play()    
    }
setrotateState(!rotatekstate)

}


    return (
        <div>
            <div id="perspective">
        <div ref={movingblock.ref}id="container">
        {array1.map(function(item,i){
          return <div ref={item.ref} style={{display: 'inline-block',
            width: '100px',
            height: '100px',
            background: 'black'}}> waqas</div> 
        })}
            
        
        </div>
            
        </div>

        <button 
        onClick={controlrotate}
      style={{display:'block', width:'auto', height:'30px'}}>{rotatekstate? 'Pause Rotate':'Start Rotate'}</button>
        
        <button 
        onClick={controlblock}
        style={{display:'block', width:'auto', height:'30px'}}>{blockstate? 'Pause block movement':'Start block movement'}</button>
        </div>
    )
}


