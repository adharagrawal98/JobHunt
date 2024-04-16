import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
  // State variables
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const [query, setQuery] = useState("");

  // Fetching data from API
  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // Handle search input change
  const handlesearchChange = (event) => {
    setQuery(event.target.value);
  }

  // Radio button filtering
  const handleInputChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Pagination: Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filterItems.length / jobsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Pagination: Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Filtered items based on search query
  const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // Calculate index range for pagination
  const calcPageRange = () => {
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    return { startIndex, endIndex };
  };

  // Filtered data based on selected category and search query
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filterItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, experienceLevel, employmentType, salaryType, maxPrice, postingDate }) => (
          postingDate >= selected ||
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase()
        )
      );
    }

    // Slice the data based on current page
    const { startIndex, endIndex } = calcPageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  // Get the filtered result
  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      <div>
        <Banner query={query} handlesearchChange={handlesearchChange} />
        <div>
          <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
            {/* Sidebar */}
            <div className="bg-white p-4 rounded">
              <Sidebar
                handleInputChange={handleInputChange}
                handleClick={handleClick}
              />
            </div>
            {/* Job cards */}
            <div className="col-span-2 bg-white p-4 rounded-sm">
              {isLoading ? (
                <p className='font-medium'>Loading...</p>
              ) : result.length > 0 ? (
                <>
                  <Jobs result={result} />
                  {/* Pagination */}
                  <div className='flex justify-center mt-4 space-x-8'>
                    <button className='bg-blue text-white py-2 px-4 rounded hover:underline' disabled={currentPage === 1} onClick={prevPage}>Prev</button>
                    <span className='mx-2'>Page {currentPage} of {Math.ceil(filterItems.length / jobsPerPage)}</span>
                    <button className='bg-blue text-white py-2 px-4 rounded hover:underline' onClick={nextPage} disabled={currentPage === Math.ceil(filterItems.length / jobsPerPage)}>Next</button>
                  </div>
                </>
              ) : (
                <h3 className='text-lg font-bold mb-2'>No Jobs Found</h3>
              )}
            </div>
            {/* Right side */}
            <div className="bg-white p-4 rounded">Right</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
