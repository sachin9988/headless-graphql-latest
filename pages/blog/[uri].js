import React from 'react'
import { format } from "date-fns";
import Link from 'next/link'
import { client } from '../../lib/apollo';
import { gql } from "@apollo/client";
const blog = ({post,posts, data,reviewsdata,topstorydata }) => {
  var olddate = new Date(post.date);
  var today = format(olddate, "MMMM do, yyyy");
	const [openTab, setOpenTab] = React.useState(1);
	return (
		
		<div>

			<header className="bg-white dark:bg-gray-800 pt-14 md:py-18">
				{/* <div className="lg:flex">
					<div className="flex items-center justify-center w-full px-6 py-8 lg:py-2 lg:h-[32rem] lg:w-1/2">
						<div className="max-w-xl py-10 sm:py-0">
						<span className=" bg-blue-700 absolute top-24 dark:bg-red  left-10 text-white px-4 py-1 text-xs font-bold uppercase     dark:text-gray-100">
            {'category' }
            </span>
							<h2 className="text-2xl font-semibold text-gray-800  dark:text-white lg:text-4xl">
								{posts.title}
							</h2>
				<div className="flex items-center space-x-6 py-6">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" w-8 h-8 dark:text-gray-400">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className=" mx-2 my-2 text-gray-300 hover:text-red-500 duration-500">by Leroy Jenkins</span>
				</div>
				<span className="text-gray-300 mx-2">{today}</span>
				<div
          className="inline-flex text-gray-300 mx-2 hover:text-red-500 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-1 my-1"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              fill=""
              d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"
            />
          </svg>
          5k Views
       		 	</div>
				<div
         
          className="inline-flex text-gray-300 mx-2 hover:text-red-500 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-1 my-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          230 Shares
        		</div>
			</div>
							
						</div>
					</div>

					<div className="w-full h-screen lg:w-1/2 lg:h-auto">
						<div className="w-full h-full bg-cover" style={{ background: `url(${data[0]['_embedded']['wp:featuredmedia'][0]['source_url']})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
							<div className="w-full h-full bg-black opacity-25"></div>
						</div>
					</div>
				</div> */}
        {/* testing-blog */}
        <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-[600px] lg:pr-8 xl:pr-6">
        <span className=" bg-blue-700 absolute lg:top-5 top-2 dark:bg-red  left-8 text-white px-4 py-1 text-xs font-bold uppercase     dark:text-gray-100">
            {'category' }
            </span>
            <h2 className="text-2xl font-semibold text-gray-800  dark:text-white lg:text-4xl">
								{post.title}
							</h2>
              <div className="flex items-center space-x-6 py-6">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" w-8 h-8 dark:text-gray-400">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className=" mx-2 my-2 text-gray-700 dark:text-gray-100 hover:text-red-500 duration-500">by Leroy Jenkins</span>
				</div>
				<span className="text-gray-700 dark:text-gray-100 mx-2">{today}</span>
				<div
          className="inline-flex text-gray-700 dark:text-gray-100 mx-2 hover:text-red-500 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-1 my-1"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              fill=""
              d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"
            />
          </svg>
          5k Views
       		 	</div>
				<div
         
          className="inline-flex text-gray-700 dark:text-gray-100 mx-2 hover:text-red-500 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-1 my-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          230 Shares
        		</div>
			</div>
          <div className="flex flex-col items-center">
            <div className="mb-2 text-sm text-gray-600 md:mb-2">Follow us</div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                    <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-68 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={post.featuredImage.node.sourceUrl}
          alt=""
        />
      </div>
    </div>
			</header>

			<section className="px-2 sm:px-4 md:px-10  py-6 bg-white dark:bg-slate-900 dark:text-gray-100">
  			<div className="container mx-auto">
    <div className="grid lg:grid-cols-12 py-10  gap-16">
      <div className="lg:col-span-8 ">
        <div className="add-container mb-6">
          <a href="">
            <img
              src={'/clientbanner.jpg'}
              className="w-full h-auto"
              alt="clientbanner" 
			  height={90}
			  width={728}
            />
          </a>
        </div>
        <div className="main">
          <div className="flex flex-col divide-y justify-center divide-coolgray-700">
            <div className=" px-1 py-4" >
            <div className="text-gray-700 dark:text-gray-100 mx-2">{today}</div> <br/>
            <div  dangerouslySetInnerHTML={{__html: post.excerpt }}></div>
            </div>
            
            {/**/}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="aside-sidebar ml-4">
          <div className=" md:grid md:grid-cols-12 mb-6 md:gap-4">
            <a href="" className="md:col-span-6 lg:col-span-12">
			<img
              src={'/clientbanner2.jpg'}
              className=""
              alt="clientbanner" 
			  height={323}
			  width={360}
            />
            </a>
            <div className="newslatter-content hidden ml-4 md:block lg:hidden md:col-span-6 mx-auto w-full box-border">
              <div className="newslatter-icon mx-4 w-full">
                <svg
                  className="svg-icon p-4 bg-pink-200 rounded-full  h-16 w-16 text-pink-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" />
                </svg>
              </div>
              <h1
                rel="noopener noreferrer"
                href="#"
                className="relative  text-black text-2xl font-bold px-2      hover:duration-700"
              >
                Subscribe To Our Weekly Newsletter
              </h1>
              <p className="px-2 py-2 text-gray-600 leading-8">
                No spam, notifications only about new products, updates.
              </p>
              <form className=" pt-6 pb-2 ">
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border-2 border-gray-300 w-full py-3 px-3 text-gray-700 mb-3 leading-tight outline-none focus:border-red-500"
                    id="Subscribe"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-red-500 hover:bg-red-600 duration-500 text-white text-sm font-semibold py-3 px-8  focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="newslatter block md:hidden lg:block dark:bg-black p-4">
            <div className="newslatter-content mx-auto w-full box-border">
              <div className="newslatter-icon py-6 mx-4 w-full">
                <svg
                  className="svg-icon p-4 bg-pink-200 rounded-full  h-16 w-16 text-pink-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" />
                </svg>
              </div>
              <h1
                rel="noopener noreferrer"
                href="#"
                className="relative  text-black text-2xl font-bold px-2 dark:text-gray-100      hover:duration-700"
              >
                Subscribe To Our Weekly Newsletter
              </h1>
              <p className="px-2 py-2 text-gray-600 leading-8 dark:text-white">
                No spam, notifications only about new products, updates.
              </p>
              <form className=" pt-6 pb-2 ">
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border-2 border-gray-300 w-full py-3 px-3 text-gray-700 mb-3 leading-tight outline-none focus:border-red-500"
                    id="Subscribe"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-red-500 hover:bg-red-600 duration-500 text-white text-sm font-semibold py-3 px-8  focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" pt-2  ">
        <div className="mx-4 ">
        <ul
            className="flex space-x-6 mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
								<li 
                className={
                  "pb-2 cursor-pointer text-xs font-bold uppercase  duration-150   block leading-normal " +
                  (openTab === 1
                    ? "dark:text-white border-gray-900 dark:border-gray-100 border-b-2 "
                    : "text-gray-500 border-transparen")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
								>Top News</li>
								<li
            			 className={
                    "pb-2 cursor-pointer text-xs font-bold uppercase  duration-150   block leading-normal " +
                    (openTab === 2
                      ? "dark:text-white border-gray-900 dark:border-gray-100 border-b-2 "
                      : "text-gray-500 border-transparen")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
								>Reviews</li>
                <li
            			 className={
                    "pb-2 cursor-pointer text-xs font-bold uppercase  duration-150   block leading-normal " +
                    (openTab === 3
                      ? "dark:text-white border-gray-900 dark:border-gray-100 border-b-2 "
                      : "text-gray-500 border-transparen")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
								>Stories</li>
			  </ul>
							
        </div>
        
             
        </div>

          <div className="w-full bg-white dark:bg-gray-900 shadow-sm rounded-sm p-4  mt-8">
  <h3 className="text-xl dark:text-white font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
  <div className="flex items-center flex-wrap gap-2">
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Beauti
    </a>
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Sports
    </a>
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Business
    </a>
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Politics
    </a>
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Computer
    </a>
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Coding
    </a>
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Web Design
    </a>
    <a
      href="#"
      className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-rose-600 hover:text-white"
    >
      Web App
    </a>
  </div>
          </div>

         
		  
          {/* <div className="newslatter py-10">
            <div className="newslatter-content mx-auto w-full box-border">
              <h1
                rel="noopener noreferrer"
                href="#"
                className="relative  text-black text-2xl font-semibold pb-2 px-2 border-b coolgray-500   dark:text-gray-100 hover:duration-700"
              >
                Instagram
              </h1>
            </div>
            <div className="axil-content box-border">
              <div className="grid grid-cols-3 py-10 gap-2">
                <div className="h-28 w-30 relative">
                  <a href="">
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{
                        backgroundImage: 'url("images/instagram-post-1.jpg")'
                      }}
                    />
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                      20K
                    </div>
                  </a>
                </div>
                <div className="h-28 w-30 relative">
                  <a href="">
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{
                        backgroundImage: 'url("images/instagram-post-1.jpg")'
                      }}
                    />
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-lg text-white font-semibold">
                      20K
                    </div>
                  </a>
                </div>
                <div className="h-28 w-30 relative">
                  <a href="">
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{
                        backgroundImage: 'url("images/instagram-post-1.jpg")'
                      }}
                    />
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-lg text-white font-semibold">
                      20K
                    </div>
                  </a>
                </div>
                <div className="h-28 w-30 relative">
                  <a href="">
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{
                        backgroundImage: 'url("images/instagram-post-1.jpg")'
                      }}
                    />
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-lg text-white font-semibold">
                      20K
                    </div>
                  </a>
                </div>
                <div className="h-28 w-30 relative">
                  <a href="">
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{
                        backgroundImage: 'url("images/instagram-post-1.jpg")'
                      }}
                    />
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-lg text-white font-semibold">
                      20K
                    </div>
                  </a>
                </div>
                <div className="h-28 w-30 relative">
                  <a href="">
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{
                        backgroundImage: 'url("images/instagram-post-1.jpg")'
                      }}
                    />
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-lg text-white font-semibold">
                      20K
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  			</div>
			</section>

		</div>
	)
}
  
  // export const getStaticPaths = async () => {
  // const res = await fetch("https://cohs.in/headless/wp-json/wp/v2/posts/");
  // const data = await res.json(); 

  // const paths = data.map((curElem) => {
  //   console.log(curElem)
  //   return {
  //     params: {
  //       pageno: curElem.slug.toString(),
  //     },
  //   };
  // });
  
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

// export async function getStaticProps(context) {
// 	const id = context.params.pageno;
//   console.log(id)
// 	const res = await fetch(`https://cohs.in/headless/wp-json/wp/v2/posts/?_embed&slug=${id}`);
// 	const data = await res.json();
// 	const reviews = await fetch('https://cohs.in/headless/wp-json/wp/v2/posts?&per_page=6&categories=5&_embed');
// 	const reviewsdata = await reviews.json();
//     const topstory = await fetch('https://cohs.in/headless/wp-json/wp/v2/posts?&per_page=6&categories=6&_embed');
//     const topstorydata = await topstory.json();
// 	return { props: { data,reviewsdata,topstorydata } }
// }

export async function getStaticProps({ params }){
  const GET_POST = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
        excerpt(format: RENDERED)
      }
    }
  `;

  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri
    }
  })
  const post = response?.data?.post
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}
export default blog
