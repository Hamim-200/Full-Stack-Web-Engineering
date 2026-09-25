"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadBook = () => {
        setReadBooks([...readBooks, book]);
                toast.success(`You completely read "${book.bookName}" `);
        
    }

    return (
        <button className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700 active:scale-95" onClick={() => handleReadBook()}>Read</button>
    );
};

export default ReadButton;