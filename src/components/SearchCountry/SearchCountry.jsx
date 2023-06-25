import "../SearchCountry/SearchCountry.scss"


const SearchCountry = ({handleSubmit}) =>{


    return(
        <form action="" className="search_country" onSubmit={handleSubmit} > 
        <input type="text" placeholder="Escribe la ciudad"/>
        <button>Buscar</button>

        </form>
    )
}

export default SearchCountry