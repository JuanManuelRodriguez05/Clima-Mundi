import "../SearchCountry/SearchCountry.scss"


const SearchCountry = ({handleSubmit}) =>{


    return(
        <form action="" className="search_country" onSubmit={handleSubmit} > 
        <input type="text" placeholder="Escribe la ciudad"/>
        <button>Get info</button>

        </form>
    )
}

export default SearchCountry