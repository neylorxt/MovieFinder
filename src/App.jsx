import React, {useEffect, useState} from 'react'
import Header from "./Components/Header.jsx";
import FilmList from "./Components/FilmList.jsx";
import Wishlist from "./Components/Wishlist.jsx";

function App() {
    const [filmsToSearch, setFilmsToSearch] = useState([]);
    const [films, setFilms] = useState([]);
    const [wishList, setWishList] = useState( [] );
    const [isWishList, setIsWishList] = useState(false );


    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem("wishlist") ));
    }, [])

  return (
    <>
        <main>

            <Header setFilms={setFilmsToSearch} setIsWishList={setIsWishList} isWishList={isWishList}/>

            {
                !isWishList && <FilmList films={films} setFilms={setFilms} filmsToSearch={filmsToSearch} wishList={wishList} setWishList={setWishList} />
            }
            {
                isWishList && <Wishlist setWishList={setWishList} wishList={wishList} />
            }

        </main>
    </>
  )
}

export default App
