import React from "react";

const Form = ({ fields = [], initialValues = {}, onSubmit }) => {
  const [formData, setFormData] = React.useState(initialValues);

  const handleChange = (e, field) => {
    const value = field.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [field.name]: value,
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

          {field.type === "checkbox" ? (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name] || false}
                onChange={(e) => handleChange(e, field)}
                className="h-4 w-4"
              />
              <span>{field.placeholder}</span>
            </div>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={
                field.displayValue !== undefined
                  ? field.displayValue                      // ⭐ Display value
                  : formData[field.name] || ""              // Normal value from form
              }
              onChange={(e) => handleChange(e, field)}
              className="border px-3 py-2 rounded w-full"
            />

          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-purple-700 text-white px-4 py-2 rounded-lg w-full hover:bg-purple-800 transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default Form;
