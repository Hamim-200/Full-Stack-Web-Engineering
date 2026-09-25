"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {

    const { wishlist, setWishlist } = useContext(BooksContext);

    const handleReadBook = () => {
        setWishlist([...wishlist, book]);
        toast.success(`You add "${book.bookName}" in your wishlist`);
    }

    return (
        <button className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700 active:scale-95" onClick={() => handleReadBook()}>WishList</button>
    );
};

export default WishListButton;