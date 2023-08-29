import React from 'react'

const NavButtons = ({ text, style }) => {
    return (
        <button className={style}>
            {text}
        </button>
    )
}

export default NavButtons