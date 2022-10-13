import React from 'react'


    
    const STYLES = ['btn--primary', 'btn--outline']
    const COLORS = ['primary', 'red', 'green'] 
    const SIZES = ['big--size', 'mobile-size', 'small-btn-search', 'small-btn']


const Button = ({children, 
                type, 
                onClick, 
                buttonStyle, 
                buttonColor,
                buttonSize
                }) =>{ 
        const checkButtonStyle = STYLES.includes(buttonStyle) ? 
                                buttonStyle :STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? 
                                buttonSize : SIZES[0];
        const checkButtonColor = COLORS.includes(buttonColor)? 
                                buttonColor:null;

    return(
        <button className={`
            btn ${checkButtonStyle}
            ${checkButtonColor} ${checkButtonSize}`}
            onClick={onClick}
            type={type}> {children} </button>
        
    )
}

export default Button;