import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Picture from '../Picture/Picture';
import axios from 'axios';
import { API_KEY } from '../key';

import './Main.css';

const Main = () => {
    const [picture, setPicture] = useState('');

    useEffect(() => {
        getPicture();
    }, []);

    const getPicture = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
            console.log(res.data.hdurl);
            setPicture(res.data.hdurl);
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <Container>
            <Picture picture={picture}/>
        </Container>
    );
}

export default Main;