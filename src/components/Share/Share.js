import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon
} from "react-share";

const Share = ({ picture }) => {
    return (
        <div className="mx-auto mb-3">
            <span>Share: </span>
            <FacebookShareButton
                url={picture}
                hashtag={"#spacestagram"}
                className={"m-1"}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
                url={picture}
                hashtag={"#spacestagram"}
                className={"m-1"}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <EmailShareButton
                body={picture}
                subject={"Check out this picture from Spacegram!"}
                separator={" "}
                className={"m-1"}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    );
}

export default Share;