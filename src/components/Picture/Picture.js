import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

import './Picture.css';

const Picture = ({ picture, title, explanation }) => {
    return (
        <Card className="card text-white bg-black">
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
                alt="Card image cap"
                src={picture}
                width="100%"
            />
            <CardBody>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <CardLink href="#">
                    Card Link
                </CardLink>
                <CardLink href="#">
                    Another Link
                </CardLink>
            </CardBody>
        </Card>
    );
}

export default Picture;