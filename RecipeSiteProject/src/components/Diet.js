import Drink from "./Drink"
const Diet = () => {

    const gastronomie = [{name : 'African', name : 'American', name : 'British'}]

    return(
        <>
        {gastronomie.map(elem => {
          return ( 
            <>
                <h2>{elem.name}</h2>
             {<Drink/>}
            </>
            )
        })}
        <h1>c'est Diet</h1>

        </>
    )
}

export default Diet