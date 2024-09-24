'use client';

import React from 'react'
import { Button } from '../ui/button'
import { FaCopy, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { toast } from 'sonner';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from 'next-share'
const ShareButton = ({ url }) => {
    const copylink = (e) => {
        toast("✅  Copied to clipboard", {
            position: "top-center"
        })
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <section className="flex gap-2 items-center">
            Share this:

            <Button size="icon" variant="outline" >
            <WhatsappShareButton
                url={window.location.href}
            >
                <FaWhatsapp />
            </WhatsappShareButton>
            </Button>
            
            <Button size="icon" variant="outline" >
            <FacebookShareButton
                url={window.location.href}
            >
                <FaFacebook />
            </FacebookShareButton>
            </Button>


            <Button size="icon" variant="outline" >
            <LinkedinShareButton
                url={window.location.href}
                quote
            >
                <FaLinkedin />
            </LinkedinShareButton>
            </Button>

            <Button size="icon" variant="outline" >
            <TwitterShareButton
                url={window.location.href}
            >
                <FaTwitter />
            </TwitterShareButton>
            </Button>



            <Button size="icon" variant="outline" onClick={copylink}><FaCopy /></Button>
        </section>
    )
}

export default ShareButton