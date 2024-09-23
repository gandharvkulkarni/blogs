'use client';

import React from 'react'
import { Button } from '../ui/button'
import { FaCopy, FaFacebook } from "react-icons/fa";
import { toast } from 'sonner';
const ShareButton = ({ url }) => {
    const copylink = (e) => {
        toast("✅  Copied to clipboard",{
            position:"top-center"
        })
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <section className="flex gap-2 items-center">
            Share this:
            <Button size="icon" variant="outline" onClick={handleLoginAndShare}><FaFacebook /></Button>
            <Button size="icon" variant="outline" onClick={copylink}><FaCopy /></Button>
        </section>
    )
}

export default ShareButton