import React from 'react'


const Card = ({
    cardIcon, cardText, cardNo
})=> { 
    return (
        <>
        
            <div className="card"> 
                <div className="card-icon"> 
                {cardIcon}            
                </div>
                <div className="card-text"> 
                {cardText}
                </div>
                <div className="card-number"> 
                {cardNo}
                </div>
            </div> 
     
        </> 

    )
}

export default Card 