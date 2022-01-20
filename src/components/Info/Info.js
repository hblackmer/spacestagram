import React, { Fragment, useState } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText,
    Spinner, Button
} from 'reactstrap';
import Share from '../Share/Share';

import './Info.css';

const Info = ({ picture, title, date, explanation, loading }) => {
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
                    <Button className="mb-3 btn-block" onClick={handleClick}>
                        {favorite ? 
                            <span><i class="fa fa-heart"></i> Added to Favorites</span> :
                            <span><i class="far fa-heart"></i> Add to Favorites</span>}
                    </Button>
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