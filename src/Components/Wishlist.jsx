import FilmCard from "./FilmCard.jsx";

export default function Wishlist({ wishList, setWishList }) {
    return (
        <>
            {
                wishList?.length > 0 ? (
                    <div className="container mx-auto grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3 p-5 mt-4">
                        {
                            wishList.map((film) => (
                                <FilmCard key={film.id} movie={film} setWishList={setWishList} wishList={wishList} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-[50vh]">
                        <div className="hero bg-base-200 border-base-300 mx-20">
                            <div className="hero-content text-center">
                                <h2 className="text-3xl">
                                    WishList is empty
                                </h2>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
