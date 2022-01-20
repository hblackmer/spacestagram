import React, { Fragment, useState } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText,
    Spinner, Button
} from 'reactstrap';
import Share from '../Share/Share';

import './Info.css';

const Info = ({ picture, loading }) => {
    const [favorite, setFavorite] = useState(false);

    const handleClick = () => {
        setFavorite(!favorite);
    }

    return (
        <Card className="card text-white bg-black mb-5">
            {loading ?
                <Fragment>
                    <CardBody>
                        <CardTitle tag="h5">
                            {picture.title}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {picture.explanation}
                        </CardSubtitle>
                    </CardBody>
                    <CardImg
                        className="card-image"
                        alt={picture.explanation}
                        src={picture.url}
                        width="50%"
                    />
                    <CardText className="mx-auto mt-1">
                        <span>Date posted: {picture.date} </span>
                    </CardText>
                    <Button className="mb-3 btn-block" onClick={handleClick}>
                        {favorite ? 
                            <i class="fa fa-heart"></i> :
                            <i class="far fa-heart"></i>}
                    </Button>
                    <Share
                        picture={picture.url}
                    />
                </Fragment>
                :
                <Spinner animation="border" role="status" />
            }
        </Card>
    );
}

export default Info;