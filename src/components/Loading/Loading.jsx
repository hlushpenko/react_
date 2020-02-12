import React from "react";
import s from './Loading.module.css'
import ProgressBar from "react-bootstrap/ProgressBar";
import {Spinner} from "react-bootstrap";

const Loading = () => (
    <div className={s.spinner}>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
    </div>
);
// <ProgressBar className={s.spinner} animated now={100}/>;


export default Loading;
