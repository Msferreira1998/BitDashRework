import React, {useState} from 'react'
import '../Styles/hora.css'

export default props =>{

    let today = new Date;

    const [hora, setHora] = useState(today.getHours())
    const [min, setMin] = useState(today.getMinutes())
    const [sec, setSec] = useState(today.getSeconds())
    

    function Hour(){
        if (hora >= 0 && hora < 6){
            return(
                <>
                    <h1>{`${hora}:${min}`}</h1>
                    <p>Boa Madrugada</p>
                </>
            )
        }

        else if (hora >= 6 && hora < 12){
            return(
                <>
                    <h1>{`${hora}:${min}`}</h1>
                    <p>Bom Dia</p>
                </>)
        }
        else if (hora >= 12 && hora < 18){
            return(
                <>
                    <h1>{`${hora}:${min}`}</h1>
                    <p>Boa Tarde</p>
                </>)
        }
        else if (hora >= 18 && hora <= 23){
            return(
                <>
                    <h1>{`${hora}:${min}`}</h1>
                    <p>Boa Noite</p>
                </>)
        }
    }

    
    return( 
        
        <div className='hora'>
            {Hour()}
        </div>

    )
}