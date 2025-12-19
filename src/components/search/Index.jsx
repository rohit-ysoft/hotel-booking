import React from "react"

const Index =({value,onChange,placeholder="Search..."}) =>{

    return (
        <div className="w-full sm:max-w-sm">
          <input type="text" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
    )
}

export default Index;