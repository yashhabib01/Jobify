import { useAppContext } from "../context/useAppContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PagebtnContainer from "./PagebtnContainer.js";
import Alert from "./Alert";
const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    totalJobs,
    page,
    isLoading,
    search,
    searchType,
    searchStatus,
    sort,
    numOfPages,
    showAlert,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [search, searchType, searchStatus, sort, page]);

  if (isLoading) {
    return <Loading center />;
  }
  if (totalJobs === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PagebtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
