import { useState } from "react";

export const SearchBar = (): JSX.Element => {
    const [ searchDisplay,setSearchDisplay ] = useState("");

    return (
    <div className="searchBarWrapper">
        <input value={searchDisplay} onChange={event => setSearchDisplay(event.target.value)}/>
    </div>
    );
}