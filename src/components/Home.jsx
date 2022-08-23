import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom";
const Home = () => {
  return (
      <>
        <Header/>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Simple. Secure.
                <br class="hidden lg:inline-block" />Reliable messaging.
              </h1>
              <p class="mb-8 leading-relaxed">With FrameUp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</p>
              <div class="flex justify-center">
                <Link to="/Register"><button class="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">Sign Up</button></Link>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know more</button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://www.textmagic.com/wp-content/uploads/2021/02/text-messaging-app-ios-android.png" />
            </div>
          </div>
        </section>





        {/* <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div class="w-full sm:p-4 px-4 mb-6">
                  <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                  <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                  <p class="leading-relaxed">Users</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                  <p class="leading-relaxed">Subscribes</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
                  <p class="leading-relaxed">Downloads</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                  <p class="leading-relaxed">Products</p>
                </div>
            </div>
          </div>
        </section>








                
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
  <div class="mr-10 mb-auto lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
    </div>
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
    
  </div>
</section> */}
        <Footer/>
      </>
    // <div>Home</div>
  )
}

export default Home