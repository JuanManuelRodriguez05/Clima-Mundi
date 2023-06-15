import { useState } from "react"
import "./NavBar.scss"

const NavBar = ({handleSearch}) => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
      }
    
    const handleSearchClick = () =>{
        handleSearch(searchValue)
    }

    return (
        <div className="header" >
            <h1 className="title" >Clima Mundi</h1>
        </div>
    )

}

export default NavBar

