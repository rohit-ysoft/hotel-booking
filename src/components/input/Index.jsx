import React from "react";

const Index = ({
  type = "text",
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-3 py-2 rounded-md border text-sm
          focus:outline-none focus:ring-2
          ${error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-blue-500"}
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Index;
