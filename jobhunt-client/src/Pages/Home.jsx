import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  //handle search
  const [query, setQuery] = useState("");
  const handlesearchChange = (event) => {
    setQuery(event.target.value);
  }

  //filtering by title

  const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

 
  // radio filtering
  const handleInputChange = (event) => {
    setSelectedCategory(event.target.value);
  };
// button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //main functions
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs= filterItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, experienceLevel, employmentType, salaryType, maxPrice }) => (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          experienceLevel === selected ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase()
        )
      );
      console.log(filteredJobs);
    }

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      <div>
        <Banner query={query} handlesearchChange={handlesearchChange} />
        <div>
          {/* main content */}
          <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
            {/* left side */}
            <div className="bg-white p-4 rounded"><Sidebar handleInputChange={handleInputChange} handleClick={handleClick}/></div>
            {/* job cards */}
            < div className= "col-span-2 bg-white p-4 rounded-sm"><Jobs result={result} /> </div>
          {/* right side */}
            <div className="bg-white p-4 rounded">Right</div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
