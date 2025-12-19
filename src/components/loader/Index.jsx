import React, { useState, useEffect } from 'react'

function Index() {
  const [loading, setLoading] = useState(true);

  //Simulate async load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // 2s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'>
      {loading ? (
        <div className='flex flex-col items-center'>
          <div className='w-16 h-16 border-4  border-blue-500 border-t-transparent rounded-full  animate-spin'> </div>
          <p className='mt-4 text-gray-600 text-lg font-medium'> Loading...</p>
        </div>

      ) : (
        <div className='p-6 bg-white rounded-xl shadow-md text-center w-full max-w-md'>
          <h1 className='text-2xl font-bold text-gray-800 '>Welcome!</h1>
          <p className='mt-2 text-gray-500'>
            Your content has loaded successfully.
          </p>
        </div>
      )
      }

    </div >
  );
}

export default Index
