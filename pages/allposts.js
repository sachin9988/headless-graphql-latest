import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { client } from "../lib/apollo";
import { gql,useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";

export default function InfiniteScrollList() {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true,
  });

  function fetchMorePosts() {
    fetchMore({ variables: { after: data.posts.pageInfo.endCursor } });
  }

  if (error) {
    return <p>Sorry, an error has occurred. Please reload the page.</p>;
  }

  if (!data && loading) {
    return <p>Loading...</p>;
  }

  if (!data?.posts.edges.length) {
    return <p>No posts have been published.</p>;
  }

  const posts = data.posts.edges.map((edge) => edge.node);
  const haveMorePosts = Boolean(data.posts?.pageInfo?.hasNextPage);

  var olddate = new Date(posts[0].date);
  var today = format(olddate, "MMMM do, yyyy");
  
  return (
    <div>
      <section className="px-2 sm:px-4 md:px-10  py-6 bg-white dark:bg-slate-900 dark:text-gray-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 py-10  gap-16">
            <div className="lg:col-span-8 ">
              <div className="add-container mb-6">
                <a href="">
                  <img
                    src={"/clientbanner.jpg"}
                    className="w-full h-auto"
                    alt="clientbanner"
                    height={90}
                    width={728}
                  />
                </a>
              </div>
              <div className="main">
                <div className="flex flex-col divide-y justify-center divide-coolgray-700">
                  <div className="-my-8 divide-y-2 divide-gray-800">
                  
      {/* <!-- card --> */}
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={haveMorePosts}
        loader={<div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-pink-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-pink-600"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-pink-600"></div>
</div>}
        endMessage={<div class="dark:bg-gray-800 bg-gray-200 rounded-md p-3 flex">
    <svg
        class="stroke-2 stroke-current text-rose-600 h-8 w-8 mr-2 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
    </svg>

    <div class="text-rose-600">
        <div class="font-bold text-xl">All Posts Loaded!</div>
    </div>
</div>}
      >
        {posts.map((post) => {
          
        var olddate = new Date(post['date']);
        var today = format(olddate, "MMMM do, yyyy");

       return   <div className="dark:bg-gray-900 ">
       <div className="space-y-4 py-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0" >
           
         <Link href={`/blog${post['uri']}`} className="group cursor-pointer">
               
           <div className="aspect-w-3 aspect-h-2 cursor-pointer">
                   
             <img className="object-cover h-[200px] w-[270px] shadow-lg rounded-lg group-hover:opacity-75"  src={post.featuredImage.node.sourceUrl} alt="Featured Photo"  />
               
           </div>
           
         </Link>
           
         <div className="sm:col-span-2" >
               
           <div className="flex items-center space-x-3" >
                                   
             <div className="flex items-center space-x-2" >
                                                   
               <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input" >
           
                 <svg className="mr-1.5 h-2 w-2 brand-react" fill="currentColor" viewBox="0 0 8 8">
               
                   <circle cx="4" cy="4" r="3"></circle>
           
                 </svg>
       Tag #1
               </span>
                                                   
               <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input" >
           
                 <svg className="mr-1.5 h-2 w-2 brand-packages" fill="currentColor" viewBox="0 0 8 8">
               
                   <circle cx="4" cy="4" r="3"></circle>
           
                 </svg>
       Tag #2
               </span>
                                                   
               <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input" >
           
                 <svg className="mr-1.5 h-2 w-2 brand-tutoriel" fill="currentColor" viewBox="0 0 8 8">
               
                   <circle cx="4" cy="4" r="3"></circle>
           
                 </svg>
           Tag #3
       
               </span>
                                           
             </div>
                   
                           
           </div>
               
           <div className="mt-2" >
                   
             <Link href={`/blog${post['uri']}`} className="group">
                       
               <h4 className="text-lg cursor-pointer leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary" >{post.title}</h4>
                   
             </Link>
                   
             <div className="mt-1 text-sm font-normal text-skin-base leading-5" dangerouslySetInnerHTML={{ __html: post.excerpt }}>
              
            </div>
                   
             <div className="mt-3 flex items-center font-sans" >
                       
               <div className="shrink-0">
                           
                 <a href="https://stackdiary.com/">
                               
                   <span className="sr-only">{post.author.node.name}</span>
                               
                   <img className="h-10 w-10 rounded-full" src="https://stackdiary.com/140x100.png" alt="Ekim Kael"  />
                           
                 </a>
                       
               </div>
                       
               <div className="ml-3">
                           
                 <p className="text-sm font-medium text-skin-inverted">
                               
                   <a href="https://stackdiary.com" className="hover:underline" >
                                   {post.author.node.name}
                               </a>
                           
                 </p>
                           
                 <div className="flex space-x-1 text-sm text-skin-muted" >
                               
                   <time datetime="2022-02-01" >{today}</time>
                               
                   
                           
                 </div>
                       
               </div>
                   
             </div>
               
           </div>
           
         </div>
       
       </div>
       </div>
          })}
          </InfiniteScroll>
    
                  </div>

                  {/**/}
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 overflow-hidden">
              <div className="aside-sidebar ml-4">
                <div className=" md:grid md:grid-cols-12 mb-6 md:gap-4">
                  <a href="" className="md:col-span-6 lg:col-span-12">
                    <img
                      src={"/clientbanner2.jpg"}
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
             

                <div className="w-full bg-white dark:bg-gray-900 shadow-sm rounded-sm p-4  mt-8">
                  <h3 className="text-xl dark:text-white font-semibold text-gray-700 mb-3 font-roboto">
                    Tags
                  </h3>
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
  );
};


const GET_POSTS = gql`
  query getPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
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
                categoryId
              }
          }
           excerpt(format: RENDERED)
            author {
              node {
                name
              }
            }
        }
      }
    }
  }
`;

const BATCH_SIZE = 10;