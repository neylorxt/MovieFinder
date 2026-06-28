import FilmCard from "./FilmCard.jsx";
import { Bookmark } from 'lucide-react'

export default function Wishlist({ wishList, setWishList }) {
    return (
        <div>
            <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Selection</p>
                    <h2 className="text-2xl font-bold text-white">Wishlist</h2>
                </div>
                <p className="text-sm text-slate-400">{wishList?.length || 0} saved titles</p>
            </div>

            {
                wishList?.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            wishList.map((film) => (
                                <FilmCard key={film.id} movie={film} setWishList={setWishList} wishList={wishList} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="grid min-h-[42vh] place-items-center border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
                        <div className="max-w-md">
                            <div className="mx-auto mb-5 grid h-12 w-12 place-items-center border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
                                <Bookmark size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Your wishlist is empty</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                Add movies from search to find them here later.
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
