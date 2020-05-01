import React from "react";
// import s from './ProfileStatus.module.css';
import {Card, Col, Form, ListGroup, Row} from "react-bootstrap";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <ListGroup.Item
                        onDoubleClick={this.activateEditMode.bind(this)}>Статус: {this.props.aboutMe}</ListGroup.Item>
                }
                {this.state.editMode &&
                    <Form.Control autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.aboutMe}/>
                }
            </>
        );
    };
};

export default ProfileStatus;
