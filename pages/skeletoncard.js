import React from 'react'

const Skeleton = () => {
  return (
    <div>
      <div class="dark:bg-white py-10 px-4 p-2  sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div class="h-52 sm:h-full sm:w-72 rounded-xl dark:bg-gray-700 bg-gray-300 animate-pulse" ></div>
      <div class="flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-1 flex-col gap-3">
          <div class="dark:bg-gray-700 bg-gray-300 w-full animate-pulse h-14 rounded-2xl" ></div>
          <div class="dark:bg-gray-700 bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div class="dark:bg-gray-700 bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div class="dark:bg-gray-700 bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div class="dark:bg-gray-700 bg-gray-300 w-full animate-pulse h-3 rounded-2xl" ></div>
        </div>
        <div class="mt-auto flex gap-3">
          <div class="dark:bg-gray-700 bg-gray-300 w-20 h-8 animate-pulse rounded-full" ></div>
          <div class="dark:bg-gray-700 bg-gray-300 w-20 h-8 animate-pulse rounded-full" ></div>
          <div class="dark:bg-gray-700 bg-gray-300 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
        </div>
      </div>
</div>
    </div>
  )
}

export default Skeleton
