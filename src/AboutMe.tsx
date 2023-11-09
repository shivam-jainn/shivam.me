import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <h1 className='text-6xl'>
        I am <span className='font-bold'>Shivam Jain</span>.
      </h1>

      <h1 className='text-5xl'>
        I love to <span className='font-bold'>Develop</span> and <span className='font-bold'>Design</span>.
      </h1>

      <p className='mt-8'>
        This is a bio about me. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda error porro repellendus atque tempore repudiandae voluptatem ab, consequuntur iure distinctio magni. Necessitatibus neque eveniet odit. Adipisci incidunt ut reprehenderit officiis?
      </p>

      {/* <h2 className='text-4xl font-bold'>Contact me</h2> */}
      <div className='flex flex-row justify-between p-4 gap-4'>

        <div className='sm:w-1/2 w-full'>
          <form className='text-black flex flex-col gap-2 h-full'>
            <input type="text" className='border-none outline-none p-2 rounded-md' placeholder='Enter your mail' />
            <textarea className='border-none outline-none p-2 h-[80%] rounded-md resize-none' placeholder='Enter your Message' />
            <button type='submit' className='border-white border-solid border-2 p-3 rounded-md hover:bg-white hover:text-black text-white'>
              Send
            </button>
          </form>
        </div>

        <canvas className='mt-2 border-2 border-dashed rounded-lg max-h-[90%] w-[90%] text-white' placeholder='draw here'>
          Just an empty one
        </canvas>
      </div>
    </div>
  );
}
