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
const ShareButton = ({ url = `${window.location.origin}${window.location.pathname}` }) => {
    const copylink = (e) => {
        toast("✅  Copied to clipboard", {
            position: "top-center"
        })
        navigator.clipboard.writeText(url)
    }

    return (
        <section className="flex gap-2 items-center">
            Share this:

            <Button size="icon" variant="outline" >
                <WhatsappShareButton
                    url={url}
                >
                    <FaWhatsapp />
                </WhatsappShareButton>
            </Button>

            <Button size="icon" variant="outline" >
                <FacebookShareButton
                    url={url}
                >
                    <FaFacebook />
                </FacebookShareButton>
            </Button>


            <Button size="icon" variant="outline" >
                <LinkedinShareButton
                    url={url}
                >
                    <FaLinkedin />
                </LinkedinShareButton>
            </Button>

            <Button size="icon" variant="outline" >
                <TwitterShareButton
                    url={url}
                >
                    <FaTwitter />
                </TwitterShareButton>
            </Button>



            <Button size="icon" variant="outline" onClick={copylink}><FaCopy /></Button>
        </section>
    )
}

export default ShareButton