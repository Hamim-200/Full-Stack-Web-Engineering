import { IBook } from '@/types/books.types';
import Image from 'next/image';

interface IbookCardprops {
    book: IBook;
}

const BookCard = ({ book }: IbookCardprops) => {
    return (
        <div

            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

            {/* Image */}
            <div className="relative h-[300px] overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
                    {book.category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 rounded-full bg-gray-900/90 px-3 py-1 text-xs font-semibold text-white">
                    ★ {book.rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">

                <h3 className="truncate text-xl font-bold text-gray-900">
                    {book.bookName}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    by {book.author}
                </p>

                {/* Review */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Info */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <span>{book.totalPages} pages</span>
                    <span>{book.yearOfPublishing}</span>
                </div>

                {/* View Details Button */}
                <button
                    type="button"
                    className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700 active:scale-[0.98]"
                >
                    View Details
                </button>

            </div>
        </div>
    );
};

export default BookCard;