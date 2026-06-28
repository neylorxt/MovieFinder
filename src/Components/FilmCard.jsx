
import { Bookmark, BookmarkCheck, Calendar, Star } from 'lucide-react'


export default function FilmCard({movie, setWishList, wishList}) {


    let image_link = "";
    if(movie?.backdrop_path){
        image_link = `https://image.tmdb.org/t/p/w500` + movie?.backdrop_path;
    }
    else{
        image_link = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";
    }

    const addMovieToWishList = () => {

        const storageKey = "wishlist";
        const storage = localStorage.getItem(storageKey);
        let arrayStorage = storage ? JSON.parse(storage) : [];

        const index = arrayStorage.findIndex(item => item.id === movie.id);

        if(index === -1 ) {
            arrayStorage.push(movie);
            localStorage.setItem(storageKey, JSON.stringify(arrayStorage));
            setWishList( wishlist => [...wishlist, movie]);
            //console.log("added");
        }
        else {
            arrayStorage.splice(index, 1);
            localStorage.setItem(storageKey, JSON.stringify(arrayStorage));
            if(setWishList) setWishList(prev => prev?.filter(item => item.id !== movie.id));
        }
    }

    const isSaved = wishList?.find(item => item.id === movie.id);
    const year = movie?.release_date ? new Date(movie.release_date).getFullYear() : "N/A";

    return (
        <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#111722] transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-[#151d2b]">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                    className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                    src={image_link}
                    alt={movie?.title ? `${movie.title} backdrop` : "Image unavailable"}
                />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 bg-black/70 px-2 py-1 text-xs font-bold text-amber-300">
                    <Star size={14} fill="currentColor" />
                    {movie?.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="mb-4 flex-1">
                    <div className="mb-3 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        <span>{movie?.original_language?.toUpperCase() || "N/A"}</span>
                        <span className="inline-flex items-center gap-1">
                            <Calendar size={13} />
                            {year}
                        </span>
                    </div>
                    <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white">
                        {movie?.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                        {movie?.overview || "No overview available for this movie."}
                    </p>
                </div>

                <button
                    onClick={() => addMovieToWishList()}
                    className={`inline-flex h-11 w-full items-center justify-center gap-2 border px-4 text-sm font-semibold transition ${
                        isSaved
                            ? "border-red-400/50 bg-red-500/10 text-red-200 hover:bg-red-500/20"
                            : "border-cyan-300/50 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20"
                    }`}
                >
                    {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                    {isSaved ? "Remove" : "Add"}
                </button>
            </div>
        </article>
    )
}
