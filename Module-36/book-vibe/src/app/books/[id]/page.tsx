import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishlistButton";
import { IBook } from "@/types/books.types";
import Image from "next/image";

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");

    if (!response.ok) {
        throw new Error("Failed to fetch books data");
    }

    const data = await response.json();
    return data;
};

const BookDetailPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;

    const booksData = await getBooks();

    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id)
    ) as IBook;

    if (!book) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    Book not found
                </h2>
                <p className="mt-2 text-gray-500">
                    The book you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10 md:py-16">
            <div className="card lg:card-side overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">

                {/* Book Image */}
                <div className="flex items-center justify-center bg-gray-50 p-8 lg:w-2/5">
                    <div className="overflow-hidden rounded-2xl shadow-md">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            width={280}
                            height={400}
                            className="h-[380px] w-[270px] object-cover transition duration-500 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Book Information */}
                <div className="card-body justify-center p-6 md:p-10 lg:w-3/5">

                    {/* Category */}
                    <div>
                        <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold text-gray-700">
                            {book.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="mt-2 text-lg text-gray-500">
                        by{" "}
                        <span className="font-semibold text-gray-800">
                            {book.author}
                        </span>
                    </p>

                    {/* Rating */}
                    <div className="mt-5 flex items-center gap-3">
                        <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-2">
                            <span className="text-lg">★</span>
                            <span className="font-bold text-gray-800">
                                {book.rating}
                            </span>
                        </div>

                        <span className="text-sm text-gray-500">
                            Reader Rating
                        </span>
                    </div>

                    {/* Book Details */}
                    <div className="mt-6 grid grid-cols-2 gap-4 border-y border-gray-100 py-5 md:grid-cols-4">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Pages
                            </p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Published
                            </p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Publisher
                            </p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Book ID
                            </p>
                            <p className="mt-1 font-semibold text-gray-800">
                                #{book.bookId}
                            </p>
                        </div>
                    </div>

                    {/* Review */}
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-gray-900">
                            About the Book
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
                            {book.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="card-actions mt-7">
                        <ReadButton book={book}></ReadButton>
                        <WishListButton book={book}></WishListButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;