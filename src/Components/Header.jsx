import {
    Plus
} from 'lucide-react'

export default function Header({setFilms, setIsWishList, isWishList}) {

    const setMyFilms = (value) => {
        setFilms(value);
    }

    return (
        <>
            <div className="relative h-[350px] bg-gradient-to-tr bg-gradient-from-blue-500 to-purple-600">
                <button  onClick={() => setIsWishList(prev => !prev)}
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl right-2 top-2 absolute z-2">
                    <Plus /> Wishlist
                </button>

                <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        MovieFinder
                    </h1>
                    <p className="text-gray-300">
                        Un film t interesse recherche le et ajoute le dans ta wishlist
                    </p>

                    {
                        !isWishList && <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
                            <input type="text" className="rounded-md w-full p-3 "
                                   placeholder="Search un title" onChange={(e) => setMyFilms(e.target.value)}/>

                        </div>
                    }




                </div>


            </div>
        </>
    )
}