import React from "react";

const Form = ({
  fields = [],
  initialValues = {},
  onSubmit,
  buttonLabel = "Submit",
  linkLabel,
  linkPath,
  onLinkClick
}) => {

  const [formData, setFormData] = React.useState(initialValues);

  const handleChange = (e, field) => {
    let value;

    // ⭐ Handle Image (File Input)
    if (field.type === "file") {
      value = field.multiple ? [...e.target.files] : e.target.files[0];
    }
    else if (field.type === "checkbox") {
      value = e.target.checked;
    }
    else {
      value = e.target.value;
    }

    setFormData({
      ...formData,
      [field.name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // ⭐ When fields >= 6 → Two-column layout
  const isTwoColumn = fields.length >= 6;

  const renderField = (field, index) => {
    const isLastOdd =
      fields.length % 2 !== 0 && index === fields.length - 1;

    return (
      <div key={index} className={isTwoColumn && isLastOdd ? "md:col-span-2" : ""}>
        <label className="block font-semibold mb-1">{field.label}</label>

        {/* ⭐ Checkbox */}
        {field.type === "checkbox" && (
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
        )}

        {/* ⭐ File Input (Single / Multiple Images) */}
        {field.type === "file" && (
          <div>
            <input
              type="file"
              name={field.name}
              multiple={field.multiple}
              accept={field.accept || "*"}
              onChange={(e) => handleChange(e, field)}
              className="border px-3 py-2 rounded w-full"
            />

            {/* ⭐ File Name Preview */}
            {formData[field.name] && (
              <div className="mt-2 text-sm text-gray-600">
                {Array.isArray(formData[field.name]) ? (
                  formData[field.name].map((file, idx) => (
                    <p key={idx}>📁 {file.name}</p>
                  ))
                ) : (
                  <p>📁 {formData[field.name].name}</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* ⭐ Normal Text Inputs */}
        {field.type !== "checkbox" && field.type !== "file" && (
          <input
            type={field.type}
            name={field.name}
            value={
              field.displayValue !== undefined
                ? field.displayValue
                : formData[field.name] || ""
            }
            onChange={(e) => handleChange(e, field)}
            className="border px-3 py-2 rounded w-full"
          />
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">

      {/* ⭐ Two Column Layout */}
      {isTwoColumn ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, index) => renderField(field, index))}
        </div>
      ) : (
        // ⭐ Single Column Layout
        fields.map((field, index) => renderField(field, index))
      )}

      {/* ⭐ Submit Button */}
      <button
        type="submit"
        className="bg-purple-700 text-white px-4 py-2 rounded-lg w-full hover:bg-purple-800 transition"
      >
        {buttonLabel}
      </button>

      {/* ⭐ Link / Popup */}
      {linkLabel && (
        <p className="text-center text-sm mt-4">
          <a
            href={linkPath || "#"}
            className="text-purple-600 hover:underline"
            onClick={(e) => {
              if (onLinkClick) {
                e.preventDefault();
                onLinkClick();
              }
            }}
          >
            {linkLabel}
          </a>
        </p>
      )}
    </form>
  );
};

export default Form;
