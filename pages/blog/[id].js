import React from 'react'
import Image from 'next/image';
import { format } from "date-fns";
import Link from 'next/link'
const blog = ({ data,reviewsdata,topstorydata }) => {
            var olddate = new Date(data[0]['date']);
            var today = format(olddate, "MMMM do, yyyy");
	const [openTab, setOpenTab] = React.useState(1);
	return (
		
		<div>

			<header className="bg-white dark:bg-gray-800 pt-14 md:py-18">
				<div className="lg:flex">
					<div className="flex items-center justify-center w-full px-6 py-8 lg:py-2 lg:h-[32rem] lg:w-1/2">
						<div className="max-w-xl py-10 sm:py-0">
						<span className=" bg-blue-700 absolute top-24 dark:bg-red  left-10 text-white px-4 py-1 text-xs font-bold uppercase     dark:text-gray-100">
            {data[0]['_embedded']['wp:term']['0']['0']['name'] }
            </span>
							<h2 className="text-2xl font-semibold text-gray-800  dark:text-white lg:text-4xl">
								{data[0]['title']['rendered']}
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
				</div>
			</header>

			<section className="px-2 sm:px-4 md:px-10  py-6 bg-white dark:bg-slate-900 dark:text-gray-100">
  			<div className="container mx-auto">
    <div className="grid lg:grid-cols-12 py-10  gap-16">
      <div className="lg:col-span-8 ">
        <div className="add-container mb-6">
          <a href="">
            <Image
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
            <div className="text-gray-300 mx-2">{today}</div> <br/>
            <div  dangerouslySetInnerHTML={{__html: data[0]['excerpt']['rendered'] }}></div>
            </div>
            
            {/**/}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="aside-sidebar ml-4">
          <div className=" md:grid md:grid-cols-12 mb-6 md:gap-4">
            <a href="" className="md:col-span-6 lg:col-span-12">
			<Image
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
        <div className="px-2 py-2 flex-auto">
        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {topstorydata.slice(1, 4).map((post, index) => {
				console.log(post)
				var olddate = new Date(post['date']);
				var today = format(olddate, "MMMM do, yyyy");
        
				return (<Link key={index} href={`/blog/${post['slug']}`}>
                        <div className="flex  py-4">
            <img
              alt=""
              className="flex-shrink-0 object-cover w-28 h-28 mr-4 dark:bg-coolGray-500"
              src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
              loading="lazy"
            />
           				 <div className="flex flex-col flex-grow">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-semibold my-2 text-lg hover:underline"
                dangerouslySetInnerHTML={{__html: post['title']['rendered'].slice(0, 45) }}
              >
              </a>
              <a
                href=""
                className=" pl-2 mx-2  text-gray-400 hover:text-red-500 duration-500"
              >
           	 by admin
              </a>
           				 </div>
                        </div>
                        </Link>)
                        })}
                        
          {/**/}
        </div>
		<div className={openTab === 2 ? "block" : "hidden"} id="link1">
                {topstorydata.slice(1, 4).map((post, index) => {
				console.log(post)
				var olddate = new Date(post['date']);
				var today = format(olddate, "MMMM do, yyyy");
        
				return (<Link key={index} href={`/blog/${post['slug']}`}>
                        <div className="flex  py-4">
            <img
              alt=""
              className="flex-shrink-0 object-cover w-28 h-28 mr-4 dark:bg-coolGray-500"
              src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
              loading="lazy"
            />
           				 <div className="flex flex-col flex-grow">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-semibold my-2 text-lg hover:underline"
                dangerouslySetInnerHTML={{__html: post['title']['rendered'].slice(0, 45) }}
              >
              </a>
              <a
                href=""
                className=" pl-2 mx-2  text-gray-400 hover:text-red-500 duration-500"
              >
           	 by admin
              </a>
           				 </div>
                        </div>
                        </Link>)
                        })}
                        
          {/**/}
        </div>
		<div className={openTab === 3 ? "block" : "hidden"} id="link1">
                {topstorydata.slice(1, 4).map((post, index) => {
				console.log(post)
				var olddate = new Date(post['date']);
				var today = format(olddate, "MMMM do, yyyy");
        
				return (<Link key={index} href={`/blog/${post['slug']}`}>
                        <div className="flex  py-4">
            <img
              alt=""
              className="flex-shrink-0 object-cover w-28 h-28 mr-4 dark:bg-coolGray-500"
              src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
              loading="lazy"
            />
           				 <div className="flex flex-col flex-grow">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-semibold my-2 text-lg hover:underline"
                dangerouslySetInnerHTML={{__html: post['title']['rendered'].slice(0, 45) }}
              >
              </a>
              <a
                href=""
                className=" pl-2 mx-2  text-gray-400 hover:text-red-500 duration-500"
              >
           	 by admin
              </a>
           				 </div>
                        </div>
                        </Link>)
                        })}
                        
          {/**/}
        </div>
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

export async function getStaticProps(context) {
	const { id } = context.params;
	const res = await fetch(`http://headless.local/wp-json/wp/v2/posts/?_embed&slug=${id}`);
	const data = await res.json();
	const reviews = await fetch('http://headless.local/wp-json/wp/v2/posts?&per_page=6&categories=5&_embed');
	const reviewsdata = await reviews.json();
    const topstory = await fetch('http://headless.local/wp-json/wp/v2/posts?&per_page=6&categories=6&_embed');
    const topstorydata = await topstory.json();
	return { props: { data,reviewsdata,topstorydata } }
}
export default blog
