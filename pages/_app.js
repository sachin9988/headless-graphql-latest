import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-theme';
import useDarkMode from '../components/useDarkMode';
import NextNProgress from "nextjs-progressbar";
import {useEffect, useState} from 'react'


function MyApp({ Component, pageProps }) {
const [colorTheme, setTheme] = useDarkMode();
const [progress, setProgress] = useState(0)
const [logo, setLogo] = useState("/white-logo.svg");

  return <>
  <ThemeProvider attribute='class'>
  <NextNProgress color='rgb(220,20,60)'  options={{ easing: "ease", speed: 500 }} />
    <Navbar logo={logo} />
    <label for="Toggle3" className="inline-flex right-0 my-72 border-2 border-rose-600 mx-10 -mr-10  rotate-90 fixed  rounded-full cursor-pointer dark:text-gray-800 z-50">
	    <input id="Toggle3" type="checkbox" className="hidden peer" />
	    <button  onClick={() =>  [setTheme("light"),  setLogo("logo-black.svg")]} className="px-4 py-1 rounded-l-full font-semibold text-sm  dark:bg-rose-600 dark:bg-transparent dark:text-rose-600 bg-rose-600 text-white  peer-checked:dark:bg-gray-300 uppercase">light</button>
	    <button onClick={() => [setTheme("dark"), setLogo("white-logo.svg")]} className="px-4 py-1 rounded-r-full dark:bg-rose-600 dark:text-white text-rose-600 font-semibold   peer-checked:dark:bg-pink-400 uppercase">dark</button>
    </label>
    <Component logo={logo} {...pageProps} />
    <Footer/>
  </ThemeProvider>
  </>
}


export default MyApp
