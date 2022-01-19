import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Picture from '../Picture/Picture';
import axios from 'axios';
import { API_KEY } from '../key';

import './Main.css';

const Main = () => {
    const [picture, setPicture] = useState('');
    const [title, setTitle] = useState('');
    const [explanation, setExplanation] = useState('');

    useEffect(() => {
        getPicture();
    }, []);

    const getPicture = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(res => {
                console.log(res);
                setPicture(res.data.hdurl);
                setTitle(res.data.title);
                setExplanation(res.data.explanation);
            }).catch(err => {
                console.log(err);
            });
    }
    return (
        <Container className="main mx-auto">
            <Picture 
                picture={picture}
                title={title}
                explanation={explanation}
            />
        </Container>
    );
}

export default Main;