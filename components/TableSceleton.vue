<template>
  <!-- <div
    role="status"
    class="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 mx-2"
  >
    <div class="flex items-center justify-between">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
      <div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
        ></div>
        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <div class="flex items-center justify-between pt-4">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
      <div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
        ></div>
        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <div class="flex items-center justify-between pt-4">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
      <div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
        ></div>
        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <div class="flex items-center justify-between pt-4">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
      <div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
        ></div>
        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <div class="flex items-center justify-between pt-4">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
      <div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
        ></div>
        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <span class="sr-only">Loading...</span>
  </div> -->

  <div
    role="status"
    class="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 animate-pulse"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-14"
            ></div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-14"
            ></div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-14"
            ></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div class="w-4 h-4 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </td>
          <td class="px-6 py-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div
              class="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
            ></div>
          </td>
        </tr>

        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div class="w-4 h-4 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </td>
          <td class="px-6 py-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div
              class="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
            ></div>
          </td>
        </tr>

        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div class="w-4 h-4 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </td>
          <td class="px-6 py-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div
              class="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
            ></div>
          </td>
        </tr>

        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div class="w-4 h-4 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </td>
          <td class="px-6 py-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div
              class="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
