

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

    return <>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

            <div>
                <img className={`rounded-t-lg ${movie?.backdrop_path?? `h-49 w-full`}`} src={image_link} alt="product image"/>
            </div>

            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {movie?.title}
                    </h5>
                </a>

                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">


                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>

                    </div>
                    <span
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{movie?.vote_average.toFixed()}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{movie?.original_language.toUpperCase(1)}</span>
                    <button  onClick={() => addMovieToWishList()}
                        className={`btn cursor-pointer ${wishList?.find(item => item.id === movie.id) ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"} text-white`}>
                        <span className="label"> { wishList?.find(item => item.id === movie.id) ? "Remove" : "+ Add To Wishlist" }</span>

                        <span className="gradient-container">
                            <span className="gradient"></span>
                        </span>

                    </button>
                </div>
            </div>
        </div>

    </>
}
