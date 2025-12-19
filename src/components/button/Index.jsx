import React from "react";

const Index =({
    children,
    type = "button",
    variant ="primary",
    size="md",
    fullWidth=false,
    disabled =false,
    onClick,
    className="",
}) =>{
    const variants ={
        primary:"bg-blue-600 text-white hover:bg-blue-700",
        secondary:"bg-gray-600 text-white hover:bg-gray-700",
        outline:"border border-gray-300 hover:bg-gray-100",
        danger:"bg-red-600 text-white hover:bg-red-700",
        ghost:"bg-transparent hover:bg-gray-100"
    };

    const sizes ={
        sm:"px-3 py-1.5 text-sm",
        md:"px-4 py-2 text-sm",
        lg:"px-5 py-3 text-base",
    };

  return(
    <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`
        inline-flex items-center justify-center rounded-lg 
         transition font-medium
         ${variants[variant]}
         ${sizes[size]}
         ${fullWidth ? "w-full" : ""}
         ${disabled ? "opacity-50 cursor-not-allowed" :""}
         ${className}
        `}
    >
       {children}
    </button>
  )

}

export default Index;