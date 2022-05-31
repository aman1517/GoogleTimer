import { useEffect, useState } from "react"

export const Timer = () =>
{

    const [val,setVal] = useState(0)
    const [timeon , setTimeon] = useState(false)

        var id
    
        useEffect( () =>{

            if( timeon )
            {
                   id = setInterval( () =>
                 {
                   if(val === 0)
                   {
                       return
                   }
       
                   setVal(val-1)
                   console.log(val)
       
                 } ,1000)   
            }

            
            return () => clearInterval(id)   
        })

        function start()
        {
            setTimeon(true)  
        }

        function stop()
        {
            setTimeon(false)
        }

        function resume()
        {
            setTimeon(true)
        }

      


    return (
        <div>
            <input placeholder= "add time" onChange={ (e) => setVal(e.target.value)}></input>
            <button onClick={() => start()}  style={ { marginLeft : "10px" }}>Start</button>
            <button onClick={ () => stop()} >Stop</button>
            <button onClick={ () => resume()} >Resume</button>
            <div style={ { display : "flex"} }>
            <h1>{val}</h1>
            </div>
        </div>
    )
}