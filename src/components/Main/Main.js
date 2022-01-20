import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import Info from '../Info/Info';
import axios from 'axios';
import { API_KEY } from '../key';

import './Main.css';

const Main = () => {
    const [pictures, setPictures] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPictures();
    }, []);

    const getPictures = async () => {
        window.scrollTo(0,0);
        try {
            setLoading(false);
            await axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=4`)
            .then(res => {
                console.log(res);
                setPictures(res.data);
            });
            setLoading(true);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Container className="main mx-auto mb-5">
            <h4>Explore and share randomized images from NASA!</h4>
            {pictures.map( picture =>
                <Info 
                    picture={picture}
                    loading={loading}
                />
            )}
            <Button onClick={getPictures} >Load Different Cards</Button>
        </Container>
    );
}

export default Main;