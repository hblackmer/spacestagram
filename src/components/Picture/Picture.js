import React, { Fragment } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Spinner
} from 'reactstrap';

import './Picture.css';

const Picture = ({ picture, title, explanation, loading }) => {
    return (
        <Card className="card text-white bg-black">
            {loading ?
                <Fragment>
                    <CardBody>
                        <CardTitle tag="h5">
                            {title}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {explanation}
                        </CardSubtitle>
                    </CardBody>
                    <CardImg
                        className="card-image"
                        alt={explanation}
                        src={picture}
                        width="50%"
                    />
                    <CardBody className="mx-auto">
                        <CardLink href="#">
                            Like
                        </CardLink>
                        <CardLink href="#">
                            Share
                        </CardLink>
                    </CardBody>
                </Fragment>
                :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </Card>
    );
}

export default Picture;