import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({ children, active, linkTo }) => {
    return (
        <div>
            <Link to={linkTo}>
                <div className={`text-center text-base px-6 py-3 rounded-md font-bold ${active ? "bg-yellow-50 text-black shadow-button1" : "bg-richblack-800 shadow-button2" } hover:scale-95 transition-all duration-200`}>{children}</div>
            </Link>
        </div>
    )
}

export default CTAButton