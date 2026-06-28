import React, {useEffect, useState} from 'react'
import Header from "./Components/Header.jsx";
import FilmList from "./Components/FilmList.jsx";
import Wishlist from "./Components/Wishlist.jsx";

function App() {
    const [filmsToSearch, setFilmsToSearch] = useState("");
    const [films, setFilms] = useState([]);
    const [wishList, setWishList] = useState( [] );
    const [isWishList, setIsWishList] = useState(false );


    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem("wishlist") || "[]"));
    }, [])

  return (
    <>
        <main className="min-h-screen bg-[#090b10] text-slate-100">

            <Header setFilms={setFilmsToSearch} setIsWishList={setIsWishList} isWishList={isWishList}/>

            <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
                {
                    !isWishList && <FilmList films={films} setFilms={setFilms} filmsToSearch={filmsToSearch} wishList={wishList} setWishList={setWishList} />
                }
                {
                    isWishList && <Wishlist setWishList={setWishList} wishList={wishList} />
                }
            </section>

        </main>
    </>
  )
}

export default App
