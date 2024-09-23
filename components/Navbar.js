"use client"
import React from 'react'
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';



const Navbar = () => {

    const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        setProgress(20)

        setTimeout(() => {
            setProgress(40)
        }, 100);

        setTimeout(() => {
            setProgress(100)
        }, 400);
    }, [pathname])



    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 50);
    }, [])
    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
                color='#933ce6'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}><div className="text-lg font-bold flex justify-center items-center gap-2">
                    <img
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%20500%20500%22%20viewBox%3D%220%200%20500%20500%22%3E%3Cpath%20fill%3D%22%2322c55e%22%20d%3D%22M61.687%2C354.415V215.55V172.32v-13.047c0-4.804%2C3.894-8.698%2C8.698-8.698h359.23%0A%09%09c4.804%2C0%2C8.698%2C3.894%2C8.698%2C8.698v188.939%22%20class%3D%22coloraab1ba%20svgShape%22%2F%3E%3Cpath%20fill%3D%22%23ecf7f0%22%20d%3D%22M250%2C150.226L250%2C150.226L250%2C150.226c-24.433-18.22-54.096-28.062-84.575-28.062H85.009v206.685h80.417%0A%09%09c30.478%2C0%2C60.142%2C9.842%2C84.574%2C28.062l0%2C0l0%2C0c24.433-18.22%2C54.096-28.062%2C84.574-28.062h80.417V122.163h-80.417%0A%09%09C304.096%2C122.163%2C274.433%2C132.006%2C250%2C150.226z%22%20class%3D%22colorecf4f7%20svgShape%22%2F%3E%3Cpolyline%20fill%3D%22%2383e5a7%22%20points%3D%22388.572%20122.163%20388.572%20188.828%20368.695%20171.495%20348.819%20188.828%20348.819%20122.163%22%20class%3D%22color83e1e5%20svgShape%22%2F%3E%3Ccircle%20cx%3D%22250%22%20cy%3D%22253.396%22%20r%3D%2261.178%22%20fill%3D%22%237ffdad%22%20class%3D%22colorfddf7f%20svgShape%22%2F%3E%3Cpath%20fill%3D%22%23ecf7f0%22%20d%3D%22M388.572%2017.376v47.182c0%206.835-5.541%2012.376-12.376%2012.376h-65.17c-3.282%200-6.43%201.304-8.751%203.625l-24.22%2024.22V76.933%2017.376C278.055%2010.541%20283.595%205%20290.43%205h85.766C383.031%205%20388.572%2010.541%20388.572%2017.376zM111.428%2017.376v47.182c0%206.835%205.541%2012.376%2012.376%2012.376h65.17c3.282%200%206.43%201.304%208.751%203.625l24.22%2024.22V76.933%2017.376C221.946%2010.541%20216.405%205%20209.57%205h-85.766C116.969%205%20111.428%2010.541%20111.428%2017.376z%22%20class%3D%22colorecf4f7%20svgShape%22%2F%3E%3Cpath%20fill%3D%22%237ffdad%22%20d%3D%22M329.197%2C495V373.736c0-6.865%2C5.565-12.43%2C12.43-12.43h25.462c9.703%2C0%2C19.009-3.854%2C25.87-10.715%0A%09%09l55.888-55.888c4.18-4.18%2C6.529-9.85%2C6.529-15.762v0c0-12.017-14.319-18.264-23.128-10.091l-31.616%2C29.336%0A%09%09c-11.778%2C10.553-27.035%2C16.389-42.85%2C16.389H250.292c0%2C0-0.292%2C0-0.292%2C0h-0.292H142.218c-15.814%2C0-31.072-5.836-42.85-16.389%0A%09%09L67.752%2C268.85c-8.809-8.174-23.128-1.926-23.128%2C10.091v0c0%2C5.912%2C2.348%2C11.582%2C6.529%2C15.762l55.888%2C55.888%0A%09%09c6.861%2C6.861%2C16.167%2C10.715%2C25.87%2C10.715h25.462c6.865%2C0%2C12.43%2C5.565%2C12.43%2C12.43V495%22%20class%3D%22colorfddf7f%20svgShape%22%2F%3E%3Cpath%20fill%3D%22%231c211e%22%20d%3D%22M56.687%2C199.701v-7.483c0-2.762%2C2.239-5%2C5-5s5%2C2.238%2C5%2C5v7.483c0%2C2.762-2.239%2C5-5%2C5%0A%09S56.687%2C202.463%2C56.687%2C199.701z%20M273.055%2C104.778V17.376C273.055%2C7.795%2C280.849%2C0%2C290.43%2C0h85.766%0A%09c9.581%2C0%2C17.375%2C7.795%2C17.375%2C17.376v47.182c0%2C9.581-7.794%2C17.376-17.375%2C17.376h-65.17c-1.97%2C0-3.823%2C0.767-5.216%2C2.16%0A%09l-24.22%2C24.22c-0.957%2C0.957-2.235%2C1.465-3.537%2C1.465c-0.644%2C0-1.294-0.124-1.913-0.381%0A%09C274.273%2C108.624%2C273.055%2C106.801%2C273.055%2C104.778z%20M283.055%2C92.707l15.685-15.685c3.282-3.282%2C7.646-5.089%2C12.287-5.089h65.17%0A%09c4.067%2C0%2C7.375-3.309%2C7.375-7.376V17.376c0-4.067-3.309-7.376-7.375-7.376H290.43c-4.067%2C0-7.375%2C3.309-7.375%2C7.376V92.707z%0A%09%20M354.448%2C48.109h2.772c2.761%2C0%2C5-2.238%2C5-5s-2.239-5-5-5h-2.772c-2.761%2C0-5%2C2.238-5%2C5S351.687%2C48.109%2C354.448%2C48.109z%0A%09%20M331.928%2C48.109h2.771c2.761%2C0%2C5-2.238%2C5-5s-2.239-5-5-5h-2.771c-2.761%2C0-5%2C2.238-5%2C5S329.167%2C48.109%2C331.928%2C48.109z%0A%09%20M309.407%2C48.109h2.771c2.761%2C0%2C5-2.238%2C5-5s-2.239-5-5-5h-2.771c-2.761%2C0-5%2C2.238-5%2C5S306.646%2C48.109%2C309.407%2C48.109z%0A%09%20M106.428%2C64.558V17.376C106.428%2C7.795%2C114.223%2C0%2C123.804%2C0h85.766c9.581%2C0%2C17.376%2C7.795%2C17.376%2C17.376v87.402%0A%09c0%2C2.022-1.218%2C3.846-3.086%2C4.619c-0.619%2C0.257-1.269%2C0.381-1.913%2C0.381c-1.301%2C0-2.58-0.508-3.537-1.465l-24.221-24.221%0A%09c-1.393-1.393-3.245-2.159-5.215-2.159h-65.17C114.223%2C81.934%2C106.428%2C74.139%2C106.428%2C64.558z%20M116.428%2C64.558%0A%09c0%2C4.067%2C3.309%2C7.376%2C7.375%2C7.376h65.17c4.641%2C0%2C9.004%2C1.807%2C12.286%2C5.088l15.686%2C15.686V17.376c0-4.067-3.309-7.376-7.376-7.376%0A%09h-85.766c-4.067%2C0-7.375%2C3.309-7.375%2C7.376V64.558z%20M142.781%2C48.109h2.771c2.761%2C0%2C5-2.238%2C5-5s-2.239-5-5-5h-2.771%0A%09c-2.761%2C0-5%2C2.238-5%2C5S140.02%2C48.109%2C142.781%2C48.109z%20M165.301%2C48.109h2.771c2.761%2C0%2C5-2.238%2C5-5s-2.239-5-5-5h-2.771%0A%09c-2.761%2C0-5%2C2.238-5%2C5S162.54%2C48.109%2C165.301%2C48.109z%20M187.822%2C48.109h2.771c2.761%2C0%2C5-2.238%2C5-5s-2.239-5-5-5h-2.771%0A%09c-2.761%2C0-5%2C2.238-5%2C5S185.061%2C48.109%2C187.822%2C48.109z%20M452.383%2C298.237l-9.07%2C9.07v40.906c0%2C2.762-2.239%2C5-5%2C5s-5-2.238-5-5%0A%09v-30.906l-36.818%2C36.818c-7.854%2C7.854-18.297%2C12.181-29.405%2C12.181h-25.462c-4.097%2C0-7.43%2C3.333-7.43%2C7.43V495c0%2C2.762-2.239%2C5-5%2C5%0A%09s-5-2.238-5-5V373.735c0-9.61%2C7.819-17.43%2C17.43-17.43h25.462c8.437%2C0%2C16.369-3.285%2C22.334-9.251l55.888-55.888%0A%09c3.266-3.267%2C5.064-7.608%2C5.064-12.227c0-3.594-1.966-6.598-5.26-8.034c-3.294-1.439-6.833-0.836-9.467%2C1.608l-31.616%2C29.336%0A%09c-12.777%2C11.45-29.18%2C17.724-46.25%2C17.724H142.218c-17.07%2C0-33.473-6.273-46.186-17.665l-31.68-29.395%0A%09c-2.634-2.444-6.173-3.047-9.467-1.608c-3.294%2C1.437-5.26%2C4.44-5.26%2C8.034c0%2C4.618%2C1.798%2C8.96%2C5.064%2C12.227l55.888%2C55.888%0A%09c5.965%2C5.966%2C13.897%2C9.251%2C22.334%2C9.251h25.462c9.611%2C0%2C17.43%2C7.819%2C17.43%2C17.43V495c0%2C2.762-2.239%2C5-5%2C5s-5-2.238-5-5V373.735%0A%09c0-4.097-3.333-7.43-7.43-7.43h-25.462c-11.108%2C0-21.551-4.326-29.405-12.181l-36.818-36.818v37.108c0%2C2.762-2.239%2C5-5%2C5%0A%09s-5-2.238-5-5v-47.108l-9.07-9.07c-5.154-5.154-7.993-12.008-7.993-19.297c0-7.579%2C4.315-14.169%2C11.261-17.2%0A%09c1.893-0.826%2C3.848-1.317%2C5.802-1.507V215.55c0-2.762%2C2.239-5%2C5-5s5%2C2.238%2C5%2C5v46.532c1.592%2C0.797%2C3.097%2C1.832%2C4.466%2C3.103%0A%09l8.855%2C8.217V155.575h-9.624c-2.039%2C0-3.698%2C1.659-3.698%2C3.698v13.047c0%2C2.762-2.239%2C5-5%2C5s-5-2.238-5-5v-13.047%0A%09c0-7.554%2C6.145-13.698%2C13.698-13.698h9.624v-23.412c0-2.762%2C2.239-5%2C5-5h80.417c30.109%2C0%2C59.995%2C9.523%2C84.574%2C26.885%0A%09c24.58-17.36%2C54.466-26.885%2C84.575-26.885h80.417c2.761%2C0%2C5%2C2.238%2C5%2C5v23.412h9.624c7.553%2C0%2C13.698%2C6.145%2C13.698%2C13.698v100.96%0A%09c1.954%2C0.189%2C3.908%2C0.681%2C5.802%2C1.506c6.946%2C3.031%2C11.261%2C9.621%2C11.261%2C17.2C460.376%2C286.229%2C457.537%2C293.083%2C452.383%2C298.237z%0A%09%20M353.819%2C177.834l11.59-10.107c1.883-1.643%2C4.689-1.643%2C6.572%2C0l11.59%2C10.107v-50.671h-29.753V177.834z%20M409.992%2C282.681V127.163%0A%09h-16.42v61.665c0%2C1.96-1.146%2C3.74-2.93%2C4.552c-0.663%2C0.301-1.368%2C0.448-2.069%2C0.448c-1.186%2C0-2.358-0.422-3.287-1.231l-16.59-14.468%0A%09l-16.59%2C14.468c-1.478%2C1.288-3.572%2C1.594-5.356%2C0.783c-1.785-0.812-2.93-2.592-2.93-4.552v-61.665h-9.244%0A%09c-28.377%2C0-56.524%2C9.102-79.575%2C25.634v20.536c0%2C2.762-2.239%2C5-5%2C5s-5-2.238-5-5v-20.536c-23.05-16.532-51.197-25.634-79.574-25.634%0A%09H90.009V282.68l12.76%2C11.84c10.812%2C9.687%2C24.845%2C15.054%2C39.449%2C15.054h72.86c-18.748-11.697-31.256-32.5-31.256-56.179%0A%09c0-36.49%2C29.688-66.178%2C66.178-66.178c36.491%2C0%2C66.179%2C29.688%2C66.179%2C66.178c0%2C23.679-12.508%2C44.482-31.257%2C56.179h72.86%0A%09c14.604%2C0%2C28.637-5.367%2C39.513-15.112L409.992%2C282.681z%20M306.179%2C253.396c0-30.977-25.202-56.178-56.179-56.178%0A%09c-30.977%2C0-56.178%2C25.201-56.178%2C56.178c0%2C30.978%2C25.202%2C56.179%2C56.178%2C56.179C280.977%2C309.574%2C306.179%2C284.373%2C306.179%2C253.396z%0A%09%20M428.847%2C265.185c1.369-1.271%2C2.874-2.305%2C4.466-3.102V159.273c0-2.039-1.659-3.698-3.698-3.698h-9.624v117.826L428.847%2C265.185z%22%20class%3D%22color1c1d21%20svgShape%22%2F%3E%3C%2Fsvg%3E"
                    alt='logo' width={40} height={40}></img>
                    <span>Datanalytics<span className='text-green-500'>.biz</span></span>
                </div>
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"> Home
                    </Link>
                    <Link href="/blogs" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        Blogs
                    </Link>
                    <div className='flex items-center'>
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">Data Analytics Blog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/"> Home
                                        </Link>
                                        <Link href="/blogs">
                                            Blogs
                                        </Link>

                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>


            </div>



        </nav>
    );
};

export default Navbar