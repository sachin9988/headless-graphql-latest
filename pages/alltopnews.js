import React from 'react'
import Link from 'next/link'
import { format } from "date-fns";
const alltopnews = ({data}) => {
  return (
    <div>
     <section className="px-2 sm:px-4 md:px-10  py-6 bg-gray-800 dark:bg-Gray-800 dark:text-gray-100">
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-12 py-10  gap-16">
      <div className="lg:col-span-8 ">
        <div className="add-container mb-6">
          <a href="">
            <img
              src="clientbanner.jpg"
              className="w-full h-auto"
              alt="clientbanner"
              loading="lazy"
            />
          </a>
        </div>
        <div className="main">
          <div className="flex flex-col divide-y justify-center divide-coolGray-700">
          {data.map ((post,index)=>{
        var olddate = new Date(post['date']);
        var today = format(olddate, "MMMM do, yyyy H:mma");
    return (<Link key={index} href={`/blog/${post['slug']}`}>  
            <div className="md:flex  px-1 py-4">
              <img
                alt=""
                id="img-box"
                className="flex-shrink-0 object-cover  mr-4 dark:bg-coolGray-500"
                src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                loading="lazy"
              />
              <div className="flex flex-col flex-grow">
                <a href="" className="flex flex-wrap px-4 pb-3">
                  <span className="bg-blue-600 duration-500 hover:bg-blue-700 text-white w-20 px-3 my-4 py-1 text-sm font-bold uppercase   top-6  dark:text-gray-100">
                    Travel
                  </span>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className=" hover:underline"
                >
                  <h1
                    rel="noopener noreferrer"
                    href="#"
                    className="relative  text-black text-xl  px-4   font-medium group-hover:underline underline-offset-8 dark:text-gray-100 hover:duration-700"
                  >
                   {post['title']['rendered']}
                  </h1>
                </a>
                <div 
                dangerouslySetInnerHTML={{__html:post['excerpt']['rendered']}}
                className='px-4 py-2 text-gray-600 leading-8'
                />
                 <p className="px-4  text-gray-400  dark:text-white 0">
                 Published on : {today}
                </p>
                <p className="px-4  text-gray-400  dark:text-coolGray-400 hover:text-red-500 duration-500">
                  By Amachea Jajah
                </p>
              </div>
            </div>
            </Link>)
            })}
            {/**/}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="aside-sidebar ml-4">
          <div className=" md:grid md:grid-cols-12 mb-6 md:gap-4">
            <a href="" className="md:col-span-6 lg:col-span-12">
              <img
                src="clientbanner2.jpg"
                alt="clientbanner"
                loading="lazy"
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
                className="relative  text-black text-2xl  px-2   font-medium   hover:duration-700"
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
          <div className="newslatter block md:hidden lg:block bg-gray-100 p-4">
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
                className="relative  text-black text-2xl  px-2   font-medium   hover:duration-700"
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
          <div className="newslatter py-4">
            <div className="newslatter-content mx-auto w-full box-border">
              <h1
                rel="noopener noreferrer"
                href="#"
                className="relative  text-black text-2xl font-semibold pb-2 px-2 border-b coolgray-500   dark:text-gray-100 hover:duration-700"
              >
                Categories
              </h1>
            </div>
            <div className="axil-content box-border">
              <ul className="flex list-none flex-wrap space-y-5 space-x-5">
                <li className="h-24 mt-6 ml-4 w-28 bg-black" />
                <li className="h-24 w-28 bg-black" />
                <li className="h-24 w-28 bg-black" />
                <li className="h-24 w-28 bg-black" />
                <li className="h-24 w-28 bg-black" />
                <li className="h-24 w-28 bg-black" />
              </ul>
            </div>
            <div className="flex items-center py-4 px-4 justify-between">
              <button
                className="bg-red-500 hover:bg-red-600 duration-500 text-white text-sm font-semibold py-3 px-8  focus:outline-none focus:shadow-outline"
                type="button"
              >
                FOLLOW US
              </button>
            </div>
          </div>
          <div className="newslatter py-4">
            <div className="axil-content box-border">
              <div className="grid grid-cols-4 py-10 gap-2">
                <div className="bg-blue-800 h-20 w-full py-2 px-6  ">
                  <a href="" className="flex-col   justify-center text-white ">
                    <div>
                      <svg className="svg-iconfb mx-auto " viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-bold ">2000+ </div>
                    <div className=" text-xs  fontsmall">Fans</div>
                  </a>
                </div>
                <div className="bg-blue-500 h-20 w-full py-2 px-4 ">
                  <a href="" className="flex-col   justify-center text-white ">
                    <div>
                      <svg className="svg-iconfb mx-auto" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-bold ">4000+ </div>
                    <div className=" text-xs  fontsmall">Followers</div>
                  </a>
                </div>
                <div className="bg-red-500 h-20 w-full py-2 px-4 ">
                  <a href="" className="flex-col  justify-center text-white ">
                    <div>
                      <svg className="svg-iconfb mx-auto" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-bold mx-4 ">1M+ </div>
                    <div className=" text-xs  fontsmall">Subscribers</div>
                  </a>
                </div>
                <div className="bg-blue-600 h-20 w-full py-2 px-2 ">
                  <a href="" className="flex-col   justify-center text-white ">
                    <div>
                      <svg
                        className="svg-iconfb mx-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </div>
                    <div className="text-sm  font-bold mx-4">600+ </div>
                    <div className=" text-xs  fontsmall">Connections</div>
                  </a>
                </div>
                <div className="bg-blue-500 h-20 w-full py-2 px-2 ">
                  <a href="" className="flex-col   justify-center text-white ">
                    <div>
                      <svg className="svg-iconfb mx-4" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M15.77,3.488c-2.266-0.067-3.801,1.105-4.605,3.519c0.415-0.158,0.817-0.237,1.206-0.237c0.829,0,1.193,0.428,1.097,1.284c-0.049,0.52-0.414,1.275-1.097,2.268c-0.682,0.993-1.192,1.489-1.534,1.489c-0.439,0-0.841-0.767-1.206-2.3C9.508,9.06,9.288,7.909,8.972,6.06C8.679,4.346,7.899,3.545,6.633,3.658c-0.537,0.045-1.34,0.496-2.412,1.354c-0.78,0.654-1.572,1.308-2.375,1.962l0.767,0.914c0.73-0.474,1.157-0.711,1.279-0.711c0.56,0,1.084,0.812,1.571,2.436c0.439,1.489,0.878,2.979,1.316,4.468c0.658,1.624,1.462,2.436,2.412,2.436c1.535,0,3.412-1.33,5.628-3.992c2.144-2.549,3.253-4.557,3.326-6.023C18.242,4.537,17.451,3.534,15.77,3.488"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-bold mx-2">5000+ </div>
                    <div className=" text-xs  fontsmall">Connections</div>
                  </a>
                </div>
                <div className="bg-red-600 h-20 w-full py-2 px-4 ">
                  <a href="" className="flex-col   justify-center text-white ">
                    <div>
                      <svg
                        className="svg-iconfb mx-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold mx-2">600+ </div>
                    <div className=" text-xs  fontsmall">Followers</div>
                  </a>
                </div>
                <div className="bg-purple-600 h-20 w-full py-2 px-4 ">
                  <a href="" className="flex-col   justify-center text-white ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-bold ">1K+ </div>
                    <div className=" text-xs  fontsmall">Followers</div>
                  </a>
                </div>
                <div className="bg-pink-600 h-20 w-full py-2 px-4 ">
                  <a href="" className="flex-col  justify-center text-white ">
                    <div>
                      <svg className="svg-iconfb" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-bold ">1K+ </div>
                    <div className=" text-xs  fontsmall">Followers</div>
                  </a>
                </div>
              </div>
            </div>
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
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )

  
}

export async function getStaticProps() {
  const alltopnews = await fetch('http://headless.local/wp-json/wp/v2/posts?categories=3&_embed');
  const data = await alltopnews.json(); 
  return { props: {data}}
}
export default alltopnews
