import React, { useEffect} from 'react'
import FilmCard from "./FilmCard.jsx";
import { getMovies, getMovieByName } from "./../Api.jsx";


export default function FilmList({filmsToSearch, setFilms, films, setWishList, wishList}) {
    useEffect(() => {
        const fetchFilms = async () => {
            let data = [];
            const query = filmsToSearch.trim();

            if(query.length > 0) {
                data = await getMovieByName(query);
            }
            else {
                data = await getMovies();
            }

            if(data && data.results) {
                setFilms(data.results);
            }
        }

        fetchFilms();

    }, [filmsToSearch, setFilms])

    const hasSearch = filmsToSearch.trim().length > 0;

    return (
        <div>
            <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{hasSearch ? "Results" : "Trending"}</p>
                    <h2 className="text-2xl font-bold text-white">{hasSearch ? "Movies found" : "Popular movies"}</h2>
                </div>
                <p className="text-sm text-slate-400">{films?.length || 0} titles</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {
                    films?.length > 0 ? films.map(film => <FilmCard key={film.id} wishList={wishList} setWishList={setWishList} movie={film}  />)
                        :

                        Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="border border-white/10 bg-white/[0.03]">
                                <div className="h-44 animate-pulse bg-white/10"></div>
                                <div className="space-y-3 p-4">
                                    <div className="h-5 w-3/4 animate-pulse bg-white/10"></div>
                                    <div className="h-4 w-1/2 animate-pulse bg-white/10"></div>
                                    <div className="h-9 w-full animate-pulse bg-white/10"></div>
                                </div>
                            </div>
                        ))
                }

            </div>
        </div>
    )
}
