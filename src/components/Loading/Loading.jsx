import React from "react";
import s from './Loading.module.css'
import ProgressBar from "react-bootstrap/ProgressBar";

const Loading = () => <ProgressBar className={s.spinner} animated now={100}/>;
export default Loading;
