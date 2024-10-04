'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { FaCopy, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { toast } from 'sonner';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from 'next-share'

const ShareButton = ({ title, url }) => {
    const [newUrl, setNewUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log(new URL(url, window.location.href).href)
            setNewUrl(new URL(url, window.location.href).href);
        }
    }, [url]);

    const copylink = () => {
        toast("✅  Copied to clipboard", {
            position: "top-center"
        });
        navigator.clipboard.writeText(newUrl);
    }

    return (
        <section className="flex gap-3 items-center">
            Share this:

            <WhatsappShareButton
                title={title}
                separator="  "
                blankTarget={false}
                url={newUrl}
            >
                <FaWhatsapp />
            </WhatsappShareButton>

            <FacebookShareButton
                quote={title}
                url={newUrl}
            >
                <FaFacebook />
            </FacebookShareButton>

            <LinkedinShareButton
                title={title}
                url={newUrl}
            >
                <FaLinkedin />
            </LinkedinShareButton>

            <TwitterShareButton
                title={title}
                url={newUrl}
            >
                <FaTwitter />
            </TwitterShareButton>

            <FaCopy onClick={copylink} />
        </section>
    )
}

export default ShareButton;
