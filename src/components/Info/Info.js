import React, { Fragment } from 'react';
import {
    Card, CardImg, CardBody, CardLink,
    CardTitle, CardSubtitle, CardText,
    Spinner
} from 'reactstrap';
import Share from '../Share/Share';

import './Info.css';

const Info = ({ picture, title, date, explanation, loading }) => {
    return (
        <Card className="card text-white bg-black mb-5">
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
                    <CardText className="mx-auto mt-1">
                        <span>Date posted: {date} </span>
                    </CardText>
                    <Share
                        picture={picture}
                    />
                </Fragment>
                :
                <Spinner animation="border" role="status" />
            }
        </Card>
    );
}

export default Info;