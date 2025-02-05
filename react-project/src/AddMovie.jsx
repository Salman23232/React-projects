import { useState } from "react";


const AddMovie = () => {
    const [movies, setMovies] = useState({
        name: 'Man of Steel',
        rating: '10',
        year: '2016',
        Actor: 'Henry Cavill'
    });
    //here to update any property of the object in states

    const update = () => {
        setMovies({
            ...movies,
            name: 'Batman',
            Actor: 'Christian Bale'
        })
    }
  return (
    <div><br /><br /><br /><br /><br />
        <div>{movies.name}</div>
        <div>{movies.Actor}</div>
        <div>{movies.rating}</div>
        <div>{movies.year}</div>
        <button onClick={update}>change</button>
    </div>
  )
}

export default AddMovie