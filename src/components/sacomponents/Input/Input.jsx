import React from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchInput = ({
  value,
  onChange,
  placeholder,
  required,
  type,
}) => {
  return (
    <form>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <AiOutlineSearch size={22} />
        </div>
        <input
          type={type}
          class="block w-full p-4 pl-10 text-base font-normal text-gray-800 border rounded-lg bg-white focus:outline-none"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

SearchInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  type: "search",
  placeholder: "Search Item",
  required: false,
  value: "",
  onChange: "",
};

export const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  type,
  disabled
}) => {
  return (
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
      disabled={disabled}
        type={type}
        class="border border-gray-300 text-gray-600 text-sm rounded-lg w-full p-3.5 bg-white shadow-md focus:outline-none"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled:PropTypes.bool,
};

InputField.defaultProps = {
  label: "",
  type: "text",
  placeholder: "",
  required: false,
  value: "",
  onChange: "",
  disabled:false
};

export const TextArea = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label class="block mb-2 text-sm text-gray-600 ">{label}</label>
      <textarea
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-600 bg-white rounded-lg border border-gray-400 shadow-md focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  label: "",
  placeholder: "",
  value: "",
  onChange: "",
};

export const InputSelect = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
        {label}
      </label>
      <select
        class="block p-4 w-full text-sm text-gray-600 bg-white rounded-lg border border-gray-400 shadow-md focus:outline-none"
        value={value}
        onChange={onChange}
      >
        {options.map((item) => (
          <option
            className="bg-white border-gray-200 rounded-lg text-xl text-gray-500"
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputSelect.defaultProps = {
  label: "",
  options: [],
  value: "",
  onChange: "",
};
