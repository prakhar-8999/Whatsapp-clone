import React, { useState } from 'react'
import './chats.css'

const Message = () => {


    const[messagesenderloader,setmessagesenderloader] = useState('fa-solid fa-paper-plane fa-2xl')



    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-slate-100 p-6">
                        <div class="flex items-center flex-shrink-0 text-black mr-6">
                            <button type='button' data-hs-offcanvas="#user-profile-section">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="default" class='prfileimg' />
                            </button>



                            {/* User-profile-section */}

                            <div id="user-profile-section" class="hs-offcanvas hs-offcanvas-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xl w-full z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700" tabindex="-1">
                                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                    <h3 class="text-3xl font-bold text-gray-800 dark:text-white">
                                        User Profile Section
                                    </h3>
                                    <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-offcanvas="#user-profile-section">
                                    <span class="sr-only">Close modal</span>
                                    <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                    </svg>
                                    </button>
                                </div>
                                <div class="p-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile-photo-large" class='profile-photo-large mt-10 ' />
                                </div>
                            </div>                               

                            {/* User-profile-section */}






                        </div>
                        <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
                            <div class="text-sm items-end lg:flex-grow">
                                <span class='font-semibold text-2xl'>Name</span>
                            </div>
                            

                            <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-100 text-black focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-offcanvas="#right-search-message">
                                <i class="fa-solid fa-magnifying-glass fa-xl"></i>
                            </button>

                            <div id="right-search-message" class="hs-offcanvas hs-offcanvas-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xl w-full z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700" tabindex="-1">
                            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                <h3 class="font-bold text-gray-800 dark:text-white">
                                Offcanvas title
                                </h3>
                                <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-offcanvas="#right-search-message">
                                <span class="sr-only">Close modal</span>
                                <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                </svg>
                                </button>
                            </div>
                            <div class="p-4">
                                <p class="text-gray-800 dark:text-gray-400">
                                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                </p>
                            </div>
                            </div>






                            <div class="hs-dropdown" data-hs-dropdown-placement="left-top">
                            <button id="hs-dropright" type="button" class="hs-dropdown-toggle px-4 justify-center items-center font-medium bg-gray-100 text-gray-700 align-middle hover:bg-gray-50 focus:ring-offset-white transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                <i class="fa-solid fa-ellipsis-vertical fa-2xl"></i>
                            </button>

                            <div class="hs-dropdown-menu w-72 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropright">
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Contact info
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Select message
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Close chat
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Mute notification
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Disappearing message
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Clear message
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                Delete chat
                                </a>
                            </div>
                            </div>
                        </div>
                    </nav>
                    <div class='message-view'>

                    </div>
                    <div class='bg-slate-200 pt-2 pb-2'>
                        <div class="flex items-center pr-3 pl-3">   
                            <label for="simple-search" class="sr-only">Search</label>
                            <input type="text" id="simple-search" class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Enter your message here " required />    
                            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-black bg-slate-200 rounded-lg border hover:bg-slate-300">
                                <i class={messagesenderloader}></i>
                                {/* <i class="fas fa-spinner fa-pulse fa-2xl"></i> */}
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>


                    {/* perticular-contact-info */}



        </>
    )
}

export default Message