import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext1 = createContext(null);

const DataProvider1 = ({ children }) => {

    const [items, setItems] = useState([]);
    const [items1, setItems1] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8083/bookStore/all')
            .then((response) => {


                // const fetchedItems = response.data.obj.map((item) => ({
                //     title: item.bookName,
                //     author: item.bookAuthor,
                //     price: item.bookPrice,
                //     id: item.bookId,
                //     img: item.imageUrl,
                // }));

                console.log(response.data.obj);

                setItems(response.data.obj);
                setItems1(response.data.obj);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);

    return (
        <DataContext1.Provider value={{
            items,
            setItems,
            items1,
            setItems1
        }}
        >
            {children}
        </DataContext1.Provider>
    )
}

export default DataProvider1;