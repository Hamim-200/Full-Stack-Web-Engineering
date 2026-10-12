import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
    id: string;
    title: string;
}

const Marquee = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news?limit=10"
    );

    const data = await res.json();
    const headlines: Headlines[] = data.data;

    return (
        <div className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center px-3">

                {/* Latest News Label */}
                <div className="shrink-0 bg-red-600 px-3 py-1.5 text-xs font-bold text-white sm:px-4 sm:text-sm">
                    সর্বশেষ
                </div>

                {/* Headlines */}
                <div className="min-w-0 flex-1 overflow-hidden bg-gray-50 text-gray-800">
                    <MarqueeText
                        className="py-1.5 text-xs sm:text-sm"
                        direction="right"
                        duration={20}
                    >
                        {headlines.map((h) => (
                            <Link
                                key={h.id}
                                href={`/news/${h.id}`}
                                className="inline-block whitespace-nowrap transition hover:text-red-600"
                            >
                                <span>{h.title}</span>
                                <span className="mx-4 font-bold text-red-600">
                                    •
                                </span>
                            </Link>
                        ))}
                    </MarqueeText>
                </div>

            </div>
        </div>
    );
};

export default Marquee;

