import React, {useEffect, useState} from "react";
import style from "./mainPage.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRetweet } from '@fortawesome/free-solid-svg-icons';




export const MainPage = (props) => {
    const [imgURL,changeURL] = useState(props.imageURL)
    const getURL = () => {
        let promise = props.getImageURL()
            promise.then(changeURL(props.imageURL))


    };
    useEffect(() => {
        changeURL(props.imageURL)
    }, [props.imageURL])

    return (
        <div className={style.main__container}>
           {props.imageURL &&
            <img style={{maxWidth: "200px"}} src={imgURL} alt="image"/>}
            <button style={{margin:"5px"}} disabled={props.isDisabled} onClick={getURL}><FontAwesomeIcon icon={faRetweet } /> Refresh</button>
        </div>
    );
}