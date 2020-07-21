import React, {useState,useContext} from 'react'
import AlbumContext from '../../contex/album/AlbumContext'

const AlbumAddForm = () => {

    const albumContext = useContext(AlbumContext)
    const [album, setAlbum] = useState({
        name: null ,
        artistID: null,
        release_year: null,
        runtime: null,
        genre: null,
        
    })


    const {name, genre, runtime, release_year} = album
    const onChange = e => setAlbum({...album,[e.target.name]:e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        albumContext.addAlbum(album)
    }




    return (
        <form class = "card" onSubmit = {onSubmit}>
            <h2 className = 'text-primary'> Add Album</h2>
            <input
                type = 'text'
                placeholder = 'name'
                name = 'name'
                value = {name}
                onChange = {onChange}
                />
            
            <input
                type = 'number'
                placeholder = 'runtime'
                name = 'runtime'
                value = {runtime}
                onChange = {onChange}

                />
                <input type="date" name="release_date"/>
      

            
            <h3> Genre</h3>
            <input type = "radio" name = "genre" value = "Rap"  onChange = {onChange}/> Rap {' '}
            <input type = "radio" name = "genre" value = "Pop"  onChange = {onChange}/> Pop {' '}
            <input type = "radio" name = "genre" value = "R&B"  onChange = {onChange} /> RB {' '}
            
        <div>
            <input type = "submit" value = "submit" className = "btn btn-primary btn-block" />
        </div>



        </form>
    )
}

export default AlbumAddForm