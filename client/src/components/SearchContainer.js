import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/useAppContext";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useState, useMemo } from "react";
const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const {
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    isLoading,
    clearFilter,
    handleChange,
    statusOptions,
    jobTypeOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    //  if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilter();
  };
  const debounce = () => {
    let timeOutId;
    return (e) => {
      clearTimeout(timeOutId);
      setLocalSearch(e.target.value);
      timeOutId = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };

  // eslint-disable-next-line
  const optimizedDebounce = useMemo(() => debounce(), []);

  if (isLoading) return;

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          <FormRowSelect
            name="searchStatus"
            labelText="status"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          <FormRowSelect
            name="searchType"
            labelText="type"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            labelText="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
