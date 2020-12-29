import React from 'react'
import { Link } from "react-router-dom";
import './../StyleSheets/SideNav_Row.css'

function SideNav_Row({Icon, title, linkPath, selected, maximized, outline}) {
    const renderMinimized = () => {
        return (
            <div className={`row__minimized ${selected && "selected"}`}>
                <Icon/>
                <span>{title}</span>
            </div>
        )
    }

    const renderMaximized = () => {
        return (
            <div className={`row__maximized ${selected && "selected"} ${outline && "outline"}`}>
                <Icon/>
                <span>{title}</span>
            </div>
        )
    }

    return (
        <Link className="link" to={linkPath}>
            <div className="sideNav_row">
                {maximized ? renderMaximized() : renderMinimized()}
            </div>
        </Link>
    )
}

export default SideNav_Row
