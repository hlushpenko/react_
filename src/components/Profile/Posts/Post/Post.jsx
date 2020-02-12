import React from 'react';
import s from './Post.module.css';
import {Alert, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
    return (
        <Alert className={s.item} key={props.key} variant='primary'>
            <img
                src="data:image/jpeg;base64,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"
                alt=""/>
            {props.text}
            <p>
                <Button variant="outline-info"><FontAwesomeIcon icon={faHeart}/> {props.like}</Button>
            </p>
        </Alert>
    )
}
export default Post;