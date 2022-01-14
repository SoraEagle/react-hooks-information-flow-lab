import React from "react";

function Header({onDarkModeClick, isDarkMode}){
    return(
        <div className={"Header " + (isDarkMode ? "dark" : "light")}>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                    {isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    );
    }

    export default Header;