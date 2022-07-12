<div className="px-2 py-2 flex-auto">
<div className={openTab === 1 ? "block" : "hidden"} id="link1">
        {posts.slice(1, 4).map((post, index) => {
        // console.log(post)
        var olddate = new Date(post['date']);
        var today = format(olddate, "MMMM do, yyyy");

        return (<Link key={index} href={`/blog/${post.uri}`}>
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
        className=" pl-2 mx-2  text-gray-700 dark:text-gray-100 hover:text-red-500 duration-500"
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
        {posts.slice(1, 4).map((post, index) => {
        // console.log(post)
        var olddate = new Date(post['date']);
        var today = format(olddate, "MMMM do, yyyy");

        return (<Link key={index} href={`/blog/${post.uri}`}>
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
        className=" pl-2 mx-2  text-gray-700 dark:text-gray-100 hover:text-red-500 duration-500"
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
        {posts.slice(1, 4).map((post, index) => {
        // console.log(post)
        var olddate = new Date(post['date']);
        var today = format(olddate, "MMMM do, yyyy");

        return (<Link key={index} href={`/blog/${post.uri}`}>
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
        className=" pl-2 mx-2  text-gray-700 dark:text-gray-100 hover:text-red-500 duration-500"
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