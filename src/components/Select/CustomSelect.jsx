import React, { useState } from "react";
import Select from "react-select";
import { useIsDesktop } from "../../hooks/useIsDesktop";
export default function CustomSelect({
  options,
  loadingMessage,
  noOptionsMessage,
  tabIndex,
  placeholder,
  name,
  onChange = null,
  value = undefined,
}) {
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(true);
  const isDesktop = useIsDesktop();
  return (
    <>
      <Select
        styles={{
          control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
            borderColor: state.isFocused ? "#3f51b5" : "#ccc",
            boxShadow: state.isFocused ? "0 0 0 1px #3f51b5" : "none",
            "&:hover": {
              borderColor: state.isFocused ? "#3f51b5" : "#888",
            },
            fontSize: "13px",
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            fontSize: "13px",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
              ? "#3f51b5"
              : state.isFocused
              ? "#f0f0f0"
              : "#fff",
            color: state.isSelected ? "#fff" : "#333",
            "&:active": {
              backgroundColor: state.isSelected ? "#3f51b5" : "#f0f0f0",
            },
            fontSize: "13px",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "#888",
            fontStyle: "italic",
            fontSize: "13px",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "#333",
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#e0e0e0",
            fontSize: "13px",
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: "#333",
            fontSize: "13px",
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            color: "#888",
            "&:hover": {
              backgroundColor: "#d32f2f",
              color: "#fff",
            },
            fontSize: "13px",
          }),
        }}
        loadingMessage={loadingMessage}
        noOptionsMessage={noOptionsMessage}
        tabIndex={tabIndex}
        className={`${isDesktop ? "p-4" : ""}basic-single margin-top-60 `}
        classNamePrefix="select"
        //defaultValue={JobCategoryOptions[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={true}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={name}
        onChange={(e) => {
          if (
            onChange != null ||
            (onChange != undefined && typeof onChange == "function")
          ) {
            onChange(e);
          } else null;
        }}
        value={value}
        options={options}
        placeholder={placeholder}
      />
    </>
  );
}
