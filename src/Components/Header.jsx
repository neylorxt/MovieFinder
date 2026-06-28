import {
    Eye,
    Film,
    Search,
    X
} from 'lucide-react'

export default function Header({setFilms, setIsWishList, isWishList}) {

    const setMyFilms = (value) => {
        setFilms(value);
    }

    return (
        <header className="border-b border-white/10 bg-[#0d1017]">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
                            <Film size={22} />
                        </div>
                        <div>
                            <p className="text-lg font-semibold tracking-wide text-white">MovieFinder</p>
                            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Cinema search</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsWishList(prev => !prev)}
                        className="inline-flex h-10 items-center gap-2 border border-white/15 bg-white/5 px-4 text-sm font-medium text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                        aria-label={isWishList ? "Close wishlist" : "Open wishlist"}
                    >
                        {isWishList ? <X size={18} /> : <Eye size={18} />}
                        <span className="hidden sm:inline">{isWishList ? "Back" : "Wishlist"}</span>
                    </button>
                </nav>

                <div className="grid gap-6 py-6 lg:grid-cols-[1fr_420px] lg:items-end">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Explore movies</p>
                        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                            Find your next movie without wasting time.
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                            Search by title, compare ratings fast, and keep the movies you like in your wishlist.
                        </p>
                    </div>

                    {!isWishList && (
                        <label className="relative block">
                            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                                type="search"
                                className="h-14 w-full border border-white/15 bg-[#111722] pl-12 pr-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                                placeholder="Search a title"
                                onChange={(e) => setMyFilms(e.target.value)}
                            />
                        </label>
                    )}
                </div>
            </div>
        </header>
    )
}
