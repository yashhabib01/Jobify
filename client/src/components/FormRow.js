const FormRow = ({ name, type, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        className="form-input"
        onChange={handleChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default FormRow;
