import React from "react";

const Form = ({ fields = [], initialValues = {}, onSubmit }) => {
  const [formData, setFormData] = React.useState(initialValues);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-3">

      {fields.map((field, index) => (
        <div key={index}>
          <label className="block font-semibold mb-1">{field.label}</label>

          <input
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
