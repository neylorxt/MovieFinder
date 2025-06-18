import React, { useEffect} from 'react'
import FilmCard from "./FilmCard.jsx";
import { getMovies, getMovieByName } from "./../Api.jsx";


export default function FilmList({filmsToSearch, setFilms, films, setWishList, wishList}) {
    useEffect(() => {
        const fetchFilms = async () => {
            let data = [];

            if(filmsToSearch.length > 0) {
                data = await getMovieByName(filmsToSearch);
            }
            else {
                data = await getMovies();
            }

            if(data && data.results) {
                setFilms(data.results);
            }
        }

        fetchFilms();

    }, [filmsToSearch])

    return (
        <>
            <div className="container mx-auto grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3 p-5 mt-4">

                {
                    films?.length > 0 ? films.map(film => <FilmCard key={film.id} wishList={wishList} setWishList={setWishList} movie={film}  />)
                        :

                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                }

            </div>
        </>
    )
}