import Link from "next/link";

interface Navs {
    slug: string
    title: string
    topicId: string | null
    url: string
    scrapable: string
}

const NavLinks = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/categories"
    );

    const data = await res.json();
    const navData: Navs[] = data.data;
    const filteredNavData = navData.filter((n) => n.scrapable);

    return (
        <nav className="border-y border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 overflow-x-auto px-3 py-1 sm:gap-3">

                <Link
                    href="/"
                    className="shrink-0 rounded px-2 py-1 text-xs font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-600 sm:text-sm"
                >
                    হোম
                </Link>

                {filteredNavData.map((n) => (
                    <Link
                        key={n.slug}
                        href={`/category/${n.slug}`}
                        className="shrink-0 rounded px-2 py-1 text-xs font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600 sm:text-sm"
                    >
                        {n.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavLinks;

