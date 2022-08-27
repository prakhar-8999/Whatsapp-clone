import React, { useEffect, useState } from 'react'
import './chats.css'
// import Loader from '../static/Loader'
import color from '../static/color';
import apihit from '../static/axios'
import Alert from '../static/Alert';
// import defaultpic from '../images/default.png'
import imageurl from '../static/imageurl';
import dashhomeimage from '../images/dashhomeimage.png'
import { useNavigate } from 'react-router-dom';
// import Spoiler from "ezcryption/dist/spoiler";

// import { Outlet,Link } from 'react-router-dom';
const Chats = () => {

    const[count,setcount] = useState(0);
    const[msgsection,setmsgsection] = useState(true);


    const[dashdata,setdashdata] = useState([]);
    const[allcontact,setallcontact] = useState([]);
    const[perticularcontact,setperticularcontact] = useState({});
    const[allmessages,setallmessages] = useState([]);
    const[messagesend,setmessgaesend] = useState('');

    const[messagesenderloader,setmessagesenderloader] = useState('fa-solid fa-paper-plane fa-2xl')

    // const[profilepic,setprofilepic] = useState('https://cdn-icons-png.flaticon.com/512/149/149071.png')

    const navigator = useNavigate();

    const logout = () => {
        apihit.get('frameup/logout')
        .then(res => {
            console.log(res)
            navigator("/Login")
            Alert(res.data.msg)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const dashhit = () => {
        apihit.get('frameup/dashboard')
        .then(res => {
            console.log(res)
            setcount(count + 1);
            setdashdata(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const allcontacts = () => {
        apihit.get('frameup/contact')
        .then(res => {
            console.log(res)
            setallcontact(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    // Showing profile pic

    const changeprophoto = () => {
        var fileUpload = document.getElementById("pro-pic");
        if (typeof (fileUpload.files) != "undefined") {
            document.getElementById('img-to-be-upload').src = URL.createObjectURL(fileUpload.files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    }
    
    // Showing profile pic


    // document.getElementById('pro-pic').addEventListener('change',function(){
    //     var fileUpload = document.getElementById("pro-pic");
    //     if (typeof (fileUpload.files) != "undefined") {
    //         document.getElementById('img-to-be-upload').src = URL.createObjectURL(fileUpload.files[0]);
    //     } else {
    //         alert("This browser does not support HTML5.");
    //     }
    // })




    const userprofilephoto = () => {
        apihit.get('frameup/userprofile')
        .then(res => {
            console.log(res)
            setcount(count + 1);
            if(res.data.profile != ''){
                document.getElementById('front-pro-pic').src = imageurl + res.data.profile;
                document.getElementById('offcanvas-pro-pic').src = imageurl + res.data.profile;
            }
        })
        .catch(err => {
            console.log(err)
        })

    }





    const changeprofilephoto = () => {
        if(document.getElementById('pro-pic').files[0] == null){
            Alert('no profile pic')
        }
        else{
            var pic = document.getElementById('pro-pic').files[0];
            console.log(pic)
            const filedata = new FormData();
            filedata.append('profile',pic);
            apihit.post('frameup/upload',filedata)
            .then(res => {
                console.log(res)
                userprofilephoto();            
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    const perticularmessage = () => {
        console.log({recieve:perticularcontact.id})

        apihit.post('frameup/recieve',{reciever:perticularcontact.id})
        .then(res => {
            console.log(res)
            setallmessages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    

    const numbersend = (phonenumber) => {
        setmsgsection(false)
        console.log('Phone Number Set',phonenumber)
        apihit.post('frameup/mobile',{'phone':phonenumber})
        .then(res => {
            console.log(res)
            setperticularcontact(res.data)
            document.getElementById('perticularprofile').src = imageurl + res.data.profile
            document.getElementById('offcanvas-perticular-contact').src = imageurl + res.data.profile
            perticularmessage();

        })
        .catch(err => {
            console.log(err)
        })

        
        
    }


    const sendmessage = () => {
        if(messagesend === '' || messagesend === null){
            Alert("Message can't be empty !!!!")
        }
        else{
            setmessagesenderloader('fas fa-spinner fa-pulse fa-2xl')
            console.log(messagesend)
            console.log(perticularcontact.id)
            // console.log(Spoiler.encrypt(messagesend))
            console.log({'reciever':perticularcontact.id,'message':messagesend})
            apihit.post('frameup/send',{'reciever':perticularcontact.id,'message':messagesend})
            .then(res => {
                console.log(res)
                setmessagesenderloader('fa-solid fa-paper-plane fa-2xl')
                setmessgaesend('')
                perticularmessage()
            })
            .catch(err => {
                console.log(err)
                setmessagesenderloader('fa-solid fa-paper-plane fa-2xl')
            })
        }
    }


    



    useEffect(() => {
        dashhit();
        allcontacts();
        userprofilephoto();
    },[]);





    return (
        // count < 2 ? <Loader/>:
        <>
            <div style={{height:'5cm',backgroundColor:color.gray}}></div>
            <div class='frontview flex'>
                <div class='w-1/3' style={{backgroundColor:'#f1f5f9'}}>
                    <nav class="flex items-center justify-between flex-wrap bg-slate-100 p-6">
                        <div class="flex items-center flex-shrink-0 text-black mr-6">
                            <button type='button' data-hs-offcanvas="#profile-section">
                                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="default" class='prfileimg' id='front-pro-pic' />
                            </button>



                            {/* Profile-Section */}

                            <div id="profile-section" class='hs-offcanvas hs-offcanvas-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xl w-full z-[60] bg-gray-100 border-r dark:bg-gray-800 dark:border-gray-700' tabindex="-1" data-hs-offcanvas-scroll="true" data-hs-offcanvas-backdrop="false">
                                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                    <h3 class="text-3xl font-semibold text-gray-800 dark:text-white">
                                        Profile
                                    </h3>
                                    <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-offcanvas="#profile-section">
                                    <span class="sr-only">Close modal</span>
                                    <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                    </svg>
                                    </button>
                                </div>
                                <div class="p-4 overflow-y-auto">
                                   <div class="hs-tooltip button-center" data-hs-tooltip-placement="top">
                                        <button type="button" class="hs-tooltip-toggle" data-hs-modal="#profile-photo-update">
                                            <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="profile-photo-large" class='profile-photo-large mt-10' id='offcanvas-pro-pic' />
                                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                                                Click to change profile photo
                                            </span>
                                        </button>
                                   </div>

                                   <div class="flex flex-col mt-6 justify-start items-start bg-white border shadow-sm rounded-xl p-4 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                        <p class="mt-1 text-xl font-medium text-gray-500 dark:text-gray-500">
                                            Your Name
                                        </p>
                                        <p class='mt-2 text-xl' style={{fontWeight:'500'}}>{dashdata[0]}</p>
                                        <p class="mt-4 text-xl font-medium text-gray-500 dark:text-gray-500">
                                            Your Email
                                        </p>
                                        <p class='mt-2 text-xl' style={{fontWeight:'500'}}>{dashdata[1]}</p>
                                    </div>
                                    <div class='m-4'>
                                        <p>This is not your username or pin. This name will be visible to your FrameUp contacts.</p>
                                    </div>
                                    
                                    <div class="flex flex-col mt-6 justify-start items-start bg-white border shadow-sm rounded-xl p-4 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                        <p class="mt-1 text-xl font-medium text-gray-500 dark:text-gray-500">
                                            About
                                        </p>
                                        <p class='mt-2 text-2xl' style={{fontWeight:'500'}}>About</p>
                                    </div>
                                    
                                </div>
                             </div>

                            {/* Profile-Section */}


                            {/* Profile Photo Change */}
                            <div id="profile-photo-update" class="hs-modal hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                                            <div class="hs-modal-open:mt-7 hs-modal-open:opacity-100 hs-modal-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                                                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                                    <h3 class="font-bold text-gray-800 dark:text-white">
                                                        Profile Photo Update
                                                    </h3>
                                                    <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-modal="#profile-photo-update">
                                                        <span class="sr-only">Close</span>
                                                        <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="p-4 w-full">
                                                    <div class="flex items-center space-x-6">
                                                        <div class="shrink-0">
                                                            <img class="object-cover w-16 h-16 rounded-full" id='img-to-be-upload'
                                                            src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png" alt="profile photo" />
                                                        </div>
                                                        <label class="block">
                                                            <span class="sr-only">Choose File</span>
                                                            <input type="file" id='pro-pic' onChange={changeprophoto} class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-gray-800 hover:file:bg-blue-100" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                                    <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-modal="#profile-photo-update">
                                                        Cancel
                                                    </button>
                                                    <button onClick={changeprofilephoto} class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-700 text-white hover:bg-gray-900" data-hs-modal="#profile-photo-update">
                                                        Change
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Profile Photo Change */}



                        </div>
                        <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
                            <div class="text-sm items-end lg:flex-grow">

                                {/* Menu Dropdown */}

                                <div class="hs-dropdown relative" data-hs-dropdown-placement="left-bottom">
                                    <button style={{float:'right'}} id="hs-split-dropleft" type="button" class="hs-dropdown-toggle relative -ml-[.3125rem] px-4 inline-flex justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-r-md">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2xl"></i>
                                    </button>

                                    <div class="hs-dropdown-menu w-72 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-split-dropleft">
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                        New group
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                        Starred message
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                        Settings
                                    </a>
                                    <button onClick={logout} class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                        Log out
                                    </button>
                                    </div>
                                </div>

                                {/* Menu Dropdown */}




                                {/* New Contact Offcanvas */}

                                <button style={{float:'right'}} type="button" class="hs-dropdown-toggle relative -ml-[.3125rem] px-4 inline-flex justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-r-md mr-2" data-hs-offcanvas="#new-contact">
                                    <i class="fa-solid fa-message fa-2xl"></i>
                                </button>

                                
                                <div id="new-contact" class="hs-offcanvas hs-offcanvas-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xl w-full z-[60] bg-white border-r dark:bg-gray-800 dark:border-gray-700" tabindex="-1">
                                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                        <h3 class="font-bold text-2xl text-gray-800 dark:text-white">
                                            Contacts 
                                        </h3>
                                        <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-offcanvas="#new-contact">
                                        <span class="sr-only">Close modal</span>
                                        <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                        </svg>
                                        </button>
                                    </div>
                                    <div class="p-4">
                                        <p class="text-3xl text-gray-800 dark:text-gray-400">
                                            Search Contacts
                                        </p><br />
                                        <div>   
                                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                            <div class="relative">
                                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                </div>
                                                <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search your contacts" required />
                                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                            </div>
                                        </div><br />
                                        <div class='allcontact-view'>

                                            {allcontact.map((allc,index) => (
                                                
                                                    <button class='w-full' key={index} data-hs-offcanvas="#new-contact" onClick={() => numbersend(allc.phone)}>
                                                        {/* <Link to='Message'> */}
                                                        <div class="mt-1 flex items-center bg-white border shadow-sm rounded-xl p-3 md:p-3 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
                                                            <img src={allc.profile === '' ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : imageurl + allc.profile} alt="default" class='prfileimg' />
                                                            {/* <img style={{display:allc.profile === '' ? 'none':'block'}} src={imageurl + allc.profile} alt="default" class='prfileimg' /> */}
                                                            <span class='ml-5 font-semibold text-2xl'>{allc.phone}</span>
                                                        </div>
                                                        {/* </Link> */}

                                                    </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* New Contact Offcanvas */}



                                {/* Status - offcanvas */}
                                
                                <button style={{float:'right'}} type="button" class="hs-dropdown-toggle relative -ml-[.3125rem] px-4 inline-flex justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-r-md mr-3" data-hs-offcanvas="#status">
                                    <i class="fa-solid fa-arrows-spin fa-2xl"></i>
                                </button>

                                <div id="status" class="hs-offcanvas hs-offcanvas-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform h-full w-full z-[60] bg-white border-b dark:bg-gray-800 dark:border-gray-700" tabindex="-1">
                                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                        <h1 class="text-3xl text-center font-bold text-gray-800 dark:text-white">
                                            Status  Update 
                                        </h1>
                                        <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-offcanvas="#status">
                                            <span class="sr-only">Close modal</span>
                                            <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="p-4">
                                        <div class='statusview flex'>
                                            <div class='w-1/3' style={{backgroundColor:color.statuslist}}>

                                            </div>
                                            <div class='w-2/3' style={{backgroundColor:color.displaystatus}}>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status - offcanvas */}
                                
                            </div>
                        </div>
                    </nav>

                    {/* Search Bar */}

                                
                    <div class="flex items-center pr-10 pl-5 pt-3 pb-3 bg-white" style={{borderRadius:'15px'}}>   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-800 focus:border-gray-900 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-800" placeholder="Search or start a new chat" />
                        </div>
                        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-gray-600 rounded-lg border border-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-800 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-gray-800">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                    <br />

                    {/* Search Bar */}

                    {/* Contacts */}
                    
                    <div class='contact-view'>
                        {/* <Link to='Message'> */}
                            <button class='w-full' onClick={() => setmsgsection(false)}>
                                <div class="mt-1 flex items-center bg-white border shadow-sm rounded-xl p-3 md:p-3 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="default" class='prfileimg' />
                                    <span class='ml-5 font-semibold text-2xl'>Name</span>
                                </div>
                            </button>
                        {/* </Link> */}
                    </div>

                    {/* Contacts */}


                </div>













                <div class='w-2/3' style={{backgroundColor:'aliceblue'}}>
                
                {
                    msgsection ? 
                    <div class="flex justify-center items-center" style={{height:'100%'}}>
                        <div class='text-center'>
                            <img src={dashhomeimage} alt="dashhomeimage" style={{width:'30rem',margin:'auto'}} />
                            <h1 class='text-3xl font-extrabold'>FrameUp Web</h1><br />
                            <p class='text-xm'>Send and receive messages without keeping your phone online</p>
                            <p class='text-xm'>Use FrameUp on up to 4 linked devices and 1 phone at the same time</p>
                        </div>
                    </div>  
                    
                    :  
                    <>
                    <nav class="flex items-center justify-between flex-wrap bg-slate-100 p-6">
                        <div class="flex items-center flex-shrink-0 text-black mr-6">
                            <button type='button' data-hs-offcanvas="#user-profile-section">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="default" class='prfileimg' id='perticularprofile' />
                            </button>



                            {/* User-profile-section */}

                            <div id="user-profile-section" class="hs-offcanvas hs-offcanvas-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xl w-full z-[60] bg-slate-100 border-l dark:bg-gray-800 dark:border-gray-700" tabindex="-1">
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


                                    <div class="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <img id='offcanvas-perticular-contact' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile-photo-large" class='profile-photo-large mt-10' />
                                        <p class='text-center mt-8 font-semibold text-3xl'>{'+91 ' + perticularcontact.phone}</p>
                                    
                                    </div>
                                    <div class="p-6 mt-5 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <p class="mt-1 text-xl font-medium text-gray-500 dark:text-gray-500">
                                            Your Name
                                        </p>
                                        <p class='mt-2 text-xl' style={{fontWeight:'500'}}>{perticularcontact.username}</p>
                                        <p class="mt-4 text-xl font-medium text-gray-500 dark:text-gray-500">
                                            Your Email
                                        </p>
                                        <p class='mt-2 text-xl' style={{fontWeight:'500'}}>{perticularcontact.email}</p>
                                    </div>

                                    <div class="p-6 mt-5 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        
                                        <button style={{color:color.red}} class='w-full p-2 pl-4 hover:bg-slate-200'>
                                            <div class="flex items-center rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
                                                <i class="fa-solid fa-trash"></i>
                                                <span class='ml-5 text-2xl'>Delete All Chats</span>
                                            </div>
                                        </button>
                                        <button style={{color:color.red}} class='w-full mt-3 p-2 pl-4 hover:bg-slate-200'>
                                            <div class="flex items-center rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
                                                <i class="fa-solid fa-trash"></i>
                                                <span class='ml-5 text-2xl'>{'Block ' + perticularcontact.phone}</span>
                                            </div>
                                        </button>
                                    </div>
                                    


                                </div>
                            </div>                               

                            {/* User-profile-section */}






                        </div>
                        <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
                            <div class="text-sm items-end lg:flex-grow">
                                <span class='font-semibold text-2xl'>{perticularcontact.phone}</span>
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
                        {
                            allmessages.map((msg,index) => (
                                <>
                                    <div style={{float:msg.reciever_id === perticularcontact.id ? 'left':'right'}} key={index}>
                                        <p>{msg.message}</p>
                                    </div><br />
                                </>
                            ))
                        }
                    </div>



                    <div class='bg-slate-200 pt-2 pb-2'>
                        <div class="flex items-center pr-3 pl-3">   
                            <label for="simple-search" class="sr-only">Search</label>
                                <input type="text" value={messagesend} id="simple-search" onChange={(e) => setmessgaesend(e.target.value)} class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Enter your message here " required />    
                                <button type="button" onClick={sendmessage} class="p-2.5 ml-2 text-sm font-medium text-black bg-slate-200 rounded-lg border hover:bg-slate-300">
                                    <i class={messagesenderloader}></i>
                                    {/* <i class="fas fa-spinner fa-pulse fa-2xl"></i> */}
                                    <span class="sr-only">Search</span>
                                </button>
                        </div>
                    </div>


                    {/* perticular-contact-info */}

                    </>


                }
                    {/* <Outlet/> */}


                    
                </div>
            </div>
        </>
    )        
}

export default Chats