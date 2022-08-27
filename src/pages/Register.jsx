import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Swal from 'sweetalert2'
import apihit from '../static/axios'
import axios from 'axios'
import Alert from '../static/Alert'
const Register = () => {

  const[name,setname] = useState('');
  const[email,setemail] = useState('');
  const[phone,setphone] = useState('');
  const[password,setpassword] = useState('');

  const[btnloading,setbtnloading] = useState(false)

  const register = () => {
    if(name === null || name === ''){
      Swal.fire('Name is Required !!!!')
    }
    else if(email === null || email === ''){
      Swal.fire('Email is Required !!!!')
    }
    else if(phone === '' || phone === null){
      Swal.fire('Phone Number is Required !!!!')
    }
    else if(password === '' || password === null){
      Swal.fire('Password is Required !!!!')
    }
    else{
      setbtnloading(true);
      console.log(name,email,phone,password);
      const registerdata = {
        'user':name,
        'mail':email,
        'phone':phone,
        'pass1':password
      }
      apihit.post('frameup/register',registerdata)
      .then(res => {
        console.log(res)
        Alert(res)
        setname('');
        setemail('');
        setphone('');
        setpassword('');
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setbtnloading(false)
      })



      const options = {
        method: 'POST',
        url: 'https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code',
        params: {phoneNumber: phone, verifyCode: '6777'},
        headers: {
          'X-RapidAPI-Key': '9bd30f703cmsh7173db37e5d54f8p1aa21ajsn270e08203edb',
          'X-RapidAPI-Host': 'telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }


  return (
    <>
        <Header/>
        <div class="mt-20 flex items-center justify-center">

          <div class="bg-white p-16 rounded shadow-2xl w-2/3">

            <h2 class="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>

            <form class="space-y-5">

              <div>
                <label class="block mb-1 font-bold text-gray-500">Name</label>
                <input type="text" onChange={(e) => setname(e.target.value)} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-gray-800" />
              </div>

              <div>
                <label class="block mb-1 font-bold text-gray-500">Email</label>
                <input type="email" onChange={(e) => setemail(e.target.value)} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-gray-800" />
              </div>

              <div>
                <label class="block mb-1 font-bold text-gray-500">Phone Number</label>
                <input type="number" onChange={(e) => setphone(e.target.value)} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-gray-800" />
              </div>

              <div>
                <label class="block mb-1 font-bold text-gray-500">Password</label>
                <input type="password" onChange={(e) => setpassword(e.target.value)} class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-gray-800" />
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="agree" />
                <label for="agree" class="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
              </div>

              <button type='button' onClick={register} disabled={btnloading} class="block w-full bg-gray-500 hover:bg-gray-800 p-4 rounded text-white transition duration-300">
                {btnloading ? <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />:null} Sign Up
              </button>

            </form>

          </div>

          </div>
        <Footer/>
    </>
  )
}

export default Register