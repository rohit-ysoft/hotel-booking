import React from 'react'

const Index =({
    children,
    title,
    subtitle,
    footer,
    variant ="default",
    onClick,
    className="",
}) => {

  const variants ={
    default:"bg-white shadow-sm",
    bordered:"bg-white border border-gray-200",
    glass:"bg-white/60  backdrop-blur shadow",
    clickable:"bg-white shadow  hover:shadow-lg  transition cursor-pointer",
  };

  return (
    <div
    onClick={onClick}
    className={`w-full rounded-xl p-4 sm:p-5
        ${variants[variant]}
        ${className}`
    }
    >
      {(title || subtitle) &&(
        <div className='mb-3'>
            {title && <h3 className='text-lg font-semibold'>{title}</h3>}
            {subtitle && (
                <p className='text-sm text-gray-500'>{subtitle}</p>
            )}
        </div>
           
      )}
      <div className='text-sm text-gray-700'>{children}</div>

      {footer && <div className='mt-4'>{footer}</div>}
    </div>
  )
}

export default Index
