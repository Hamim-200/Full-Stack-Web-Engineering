'use client'
import BookCard from '@/components/shared/BookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import Image from 'next/image';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);

    return (
        <div className='container mx-auto py-[60px]'>

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Listed Books
            </h2>

            <h2 className="mb-6 flex flex-wrap items-center gap-3 text-base font-medium text-gray-700">
                <span>
                    Reading Book List:
                    <span className="ml-2 rounded-full bg-blue-100 px-3 py-1 font-bold text-blue-700">
                        {readBooks.length}
                    </span>
                </span>

                <span className="text-gray-400">|</span>

                <span>
                    Wish Listed Books:
                    <span className="ml-2 rounded-full bg-purple-100 px-3 py-1 font-bold text-purple-700">
                        {wishlist.length}
                    </span>
                </span>
            </h2>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        readBooks.length > 0 ? (readBooks.map((book: IBook) => {
                            return <BookCard key={book.bookId} book={book} ></BookCard>
                        })
                        ) : <h2>No read Books Found</h2>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishlist.length > 0 ? (wishlist.map((book: IBook) => {
                            return <BookCard key={book.bookId} book={book} ></BookCard>

                        })
                        ) : <h2>No Wishlist was added</h2>
                    }
                </div>


            </div>
        </div>
    );
};

export default ListedBooks;