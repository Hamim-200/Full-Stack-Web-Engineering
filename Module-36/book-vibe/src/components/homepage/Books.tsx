import Image from 'next/image';
import React from 'react';
import BookCard from '../shared/BookCard';

const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");

    if (!response.ok) {
        throw new Error("Failed to fetch books data");
    }

    const data = await response.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-[50px] px-4">

            {/* Section Title */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Books
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Explore our collection of amazing books
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {booksData.map((book, ind) => {
                    return <BookCard key={ind} book={book}></BookCard>
                })}

            </div>
        </section>
    );
};

export default Books;