import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader'

const JobDetails = () => {
    const handleApply = async () => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL where you uploaded your CV"
        });
        if (url) {
            console.log(url);
            Swal.fire(`Entered URL: ${url}`);
        }
    }
    const { id } = useParams();
    const [job, setJob] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then((res) => res.json()).then((data) => setJob(data))
    }, [])
    return (
    <div className='max-w-screen-2xl conatiner mx-auto xl:px-24 px-4'>
        <PageHeader title={"Job summary"} path={"Job Description"} />
        {job.id && <h2><strong> Job Id: </strong> {id}</h2>}
{job.companyName && <h2><strong> Company Name: </strong>  {job.companyName.charAt(0).toUpperCase() + job.companyName.slice(1)}</h2>}
{job.jobTitle && <h2> <strong>Job Title: </strong>{job.jobTitle.charAt(0).toUpperCase() + job.jobTitle.slice(1)}</h2>}
{job.salaryType && <h2><strong> Salary Type: </strong>  {job.salaryType.charAt(0).toUpperCase() + job.salaryType.slice(1)}</h2>}
{job.jobLocation && <h2><strong> Job Location: </strong>  {job.jobLocation.charAt(0).toUpperCase() + job.jobLocation.slice(1)}</h2>}
{job.employmentType && <h2><strong> Employement Type: </strong>  {job.employmentType.charAt(0).toUpperCase() + job.employmentType.slice(1)}</h2>}
{job.experienceLevel && <h2><strong> Experience Level Required: </strong>  {job.experienceLevel.charAt(0).toUpperCase() + job.experienceLevel.slice(1)}</h2>}
{job.description && <p><strong>Job Description:</strong>{" "} {job.description.charAt(0).toUpperCase() + job.description.slice(1)}</p>}




<button className="bg-blue py-2 px-8 text-white font-semibold rounded-sm mx-2 mb-4 flex justify-center items-center" onClick={handleApply}>Apply</button>


    </div >
  )
}

export default JobDetails
