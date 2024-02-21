import React from 'react'

const Dashboard = () => {
 
  return (
   
    <div class="p-4 sm:ml-64"> 
      <div class=" mt-[5.5rem]">
      
      <div class="bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <div class="grid max-w-screen-xl grid-cols-1 gap-8 sm:gap-0 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <p class="mb-2 text-4xl font-bold">73</p>
                    <p class="text-gray-500 dark:text-gray-400">Total Books</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="mb-2 text-4xl font-bold">100</p>
                    <p class="text-gray-500 dark:text-gray-400">Number of User</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="mb-2 text-4xl font-bold">1000</p>
                    <p class="text-gray-500 dark:text-gray-400">Issued Books</p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard