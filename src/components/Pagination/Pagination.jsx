import React from "react";
import style from "./pagination.module.css";

export const Pagination = ( {perPage,totalPictures,paginate} ) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPictures / perPage); i++){
        pageNumbers.push(i)
    }
    return <div className={style.pagination__container}>
        <ul>
            {pageNumbers.map(number => (
                <li key={number}><a onClick={()=>paginate(number)} href="#">{number}</a></li>
            ))}
        </ul>
    </div>
}