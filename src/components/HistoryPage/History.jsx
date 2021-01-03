import React, {useState} from 'react';
import {Pagination} from "../Pagination/Pagination";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "./history.module.css";

export const HistoryPage = ({story}) => {
    const filteredStory = story.filter(field => {
        if (field.id.length > 0) {
            return field
        }
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [picturesPerPage] = useState(5);

    const indexOfLastEvent = currentPage * picturesPerPage;
    const indexOfFirstEvent = indexOfLastEvent - picturesPerPage;
    const currentStory = filteredStory.slice(indexOfFirstEvent, indexOfLastEvent)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)




    return <>
        <Pagination perPage={picturesPerPage} totalPictures={filteredStory.length} paginate={paginate}/>
        <div className={style.history__container}>

            {currentStory.map(field => <div style={{display: "flex", maxWidth: "350px"}} key={field.id}><img
                src={field.url} alt="img" style={{width: "150px", height: "150px"}}/>
                <div><b>{field.date}</b><p>{!field.title ? "random picture" : field.title}</p></div>
                <button onClick={()=>""}><FontAwesomeIcon icon={faTimesCircle} size="lg"/></button>
            </div>)
            }
        </div>
    </>
}