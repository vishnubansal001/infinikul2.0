import React, { useState } from 'react';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import { AiOutlineClose } from "react-icons/ai";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password, rememberMe };
    console.log(data)
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

      setEmail('');
      setPassword('');
  };

  return (
    <div className='grid lg:grid-cols-2'>
      {/* first column */}
      <div className='bg-[url(C:\Users\singh\Desktop\Infinikul\infi\src\assets\Login.jpg)] lg:h-[1000px] h-[500px] bg-cover rounded-3xl text-white flex justify-center items-center shadow-2xl'>
        <img alt='/' className='h-[90px]' src={logo2} />
      </div> 

      {/* second column */}
      <div className='lg:ml-0 lg:mt-0 mt-[-70px]  lg:col-start-2 lg:col-end-3 bg-white rounded-[40px] h-[300px] '>
        {/* first div for nav */}
        <div className=''>
          <div className='lg:flex hidden  justify-end'>
            <img alt='/' className='h-[50px] lg:flex justify-end hidden m-5' src={logo} />
          </div>
          <AiOutlineClose size={30} className='m-5 ml-8 lg:hidden' />
        </div>

        {/* for main content */}
        <div className='flex justify-center lg:mt-32 mt-12 h-full'>
          <div className='flex flex-col'>
            <h1 className='font-bold lg:text-[50px] text-[35px] flex justify-start'>WELCOME Back !</h1>
            <h1 className='lg:text-[15px] text-[12px] flex justify-start font-thin'>Sign in to your account and enjoy learning.</h1>
            <form className='flex flex-col space-y-12 mt-16' onSubmit={handleSubmit}>

              <div className='flex flex-col lg:space-y-10 space-y-5 '>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  className='px-4 py-3 lg:w-[500px] w-[380px] border rounded-xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />



                
  <div className='flex'>
    <div className='flex flex-col w-full'>
      <input
        placeholder='Password'
        type={showPassword ? 'text' : 'password'}
        id='password'
        name='password'
        onChange={(event) => setPassword(event.target.value)}
        className='px-4 py-3 w-full rounded-xl border shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
      />
    </div>
    <button
      type='button'
      className='text-gray-600  hover:text-gray-900 focus:outline-none'
      onClick={() => setShowPassword(!showPassword)}
    >
      <h1 className='ml-2'>{showPassword ? 'Hide' : 'Show'}</h1>
      
    </button>
  </div>

  <div className="flex justify-between items-center">
  <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded-full border-gray-400 text-purple-600 focus:ring-purple-500"
                name="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-sm font-medium text-gray-700">Remember me</span>
            </label>
  <a href="/" className="text-sm font-medium text-purple-600 hover:underline focus:outline-none focus:underline">Forgot Password?</a>
</div>

  <button
    type='submit'
    className=' px-4 py-2 text-white bg-[#5b2fb9] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    onClick={handleSubmit}
  >
    Sign in
  </button>
  <div className=' flex justify-start'>
  <h1 className='text-[14px]'>New User? <span className='underline text-purple-600'> Sign Up</span></h1>
  </div>
  
</div>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
