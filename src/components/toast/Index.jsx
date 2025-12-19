import React,{useEffect} from 'react'


 const toastStyles={
    success:"bg-green-500",
    error:"bg-red-500",
    warning:"bg-yellow-500 text-black",
    info:"bg-blue-500",
  }
function Index({
    show,
    message,
    type="info",
    duration=3000,
    onClose,
}) {

 useEffect(() =>{
    if(!show) return;
    const timer =setTimeout(onClose,duration);
    return () =>clearTimeout(timer);
 },[show,duration,onClose]);

 if(!show) return null;

  return (
    <div className='fixed top-4 right-4 z-50 w-full max-w-xs px-4'>
        <div
        className={`rounded-lg px-4 py-3 text-white shadow-lg transition-all 
            ${toastStyles[type]}`}
        >
        {message}
        </div>
      
    </div>
  )
}

export default Index
