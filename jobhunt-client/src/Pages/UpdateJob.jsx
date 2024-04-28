import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateJob = () => {
  const {id} = useParams();

  const {_id, jobTitle, companyName, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, description, skills} = useLoaderData();
  const [selectedOption, setSelectedOption] = useState(null);
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
      data.skills = selectedOption;
      fetch(`http://localhost:3000/update-job/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((result) => {
          console.log(result);
          if(result.acknowledged === true) {
              alert("Job updated Successfully!");
               window.location.reload();
          }
      });
  };
  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Java', label: 'Java' }, 
    { value: 'Python', label: 'Python' },
    { value: 'C++', label: 'C++' }, 
    { value: 'C', label: 'C' }, 
    { value: 'PHP', label: 'PHP' }, 
    { value: 'React', label: 'React' }, 
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Swift', label: 'Swift' }, 
    { value: 'Kotlin', label: 'Kotlin' }, 
    { value: 'Go', label: 'Go' },
]
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/edit-job/${id}`)
      .then((res) => res.json())
      .then((data) => setJobData(data))
      .catch((error) => console.error("Error fetching job:", error));
  }, [id]);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
                {/* form */}
                <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="create-job-flex">
                            {/* First Row */}
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Job Title</label>
                                <input type="text" placeholder={"Web Developer"}
                                    {...register("jobTitle", { required: true, maxLength: 80 })} className="create-job-input" />
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Company Name</label>
                                <input type="text" placeholder={"Ex: Microsoft, Amazon"}
                                    {...register("companyName", { required: true, maxLength: 80 })} className="create-job-input" />
                            </div>
                        </div>
                        {/* second row */}
                        <div className="create-job-flex">
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Minimum Salary</label>
                                <input type="text" placeholder={"£20K"}
                                    {...register("minPrice", { required: true })} className="create-job-input" />
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Maximum Salary</label>
                                <input type="text" placeholder={"£100K"}
                                    {...register("maxPrice", { required: true })} className="create-job-input" />
                            </div>

                        </div>

                        {/* Third Row */}
                        <div className="create-job-flex">
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Salary Type</label>
                                <select {...register("salaryType")} className="create-job-input">
                                    <option value="Choose your salary type">Choose your salary type</option>
                                    <option value="Yearly">Yearly</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Monthly">Monthly</option>
                                </select>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Job Location</label>
                                <input type="text" placeholder={"Ex: London, Bristol, Edinburgh"}
                                    {...register("jobLocation", { required: true })} className="create-job-input" />
                            </div>

                        </div>

                        {/* Fourth Row */}
                        <div className="create-job-flex">
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Job Posting Date</label>
                                <input type="date" placeholder={"Ex: 2024-03-28"}
                                    {...register("postingDate")} className="create-job-input" />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Experience Level</label>
                                <select {...register("jobType")} className="create-job-input">
                                    <option value="Choose your job type">Choose the Experience level required! </option>
                                    <option value="Any Experience">Any Experience</option>
                                    <option value="2plusyears">2+ years</option>
                                    <option value="5plusyears">5+ years</option>
                                </select>
                            </div>
                        </div>

                        {/* Fifth Row */}
                        <div>
                            <label className='block mb-2 text-lg'>Required Skill Sets:</label>
                            <CreatableSelect
                                className="create-job-input py-4" options={options} isMulti onChange={setSelectedOption} name="requiredSkills" defaultValue={selectedOption} />
                        </div>

                        {/* 6th Row */}
                        <div className="create-job-flex">
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Company Logo</label>
                                <input type="url" placeholder={"Paste your company logo URL: https://drive.google.com/logo.png"}
                                    {...register("companyLogo")} className="create-job-input" />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'> Employment Type</label>
                                <select {...register("employmentType")} className="create-job-input">
                                    <option className="text-gray-400" value="Choose your Employment type">Choose your Employment type </option>
                                    <option value="Any Experience">Any </option>
                                    <option value="Full-time">Full-Time</option>
                                    <option value="Part-time">Part-Time</option>
                                    <option value="Temporary">Temporary</option>
                                </select>
                            </div>
                        </div>

                        {/* 7th Row */}
                        <div className='w-full'>
                            <label className='block mb-2 text-lg'>Job Description</label>
                            <textarea
                                {...register("description", { required: true })} className="create-job-input" rows={3} placeholder='Enter your job description here!' />
                        </div>

                        {/* 8th row */}
                        <div className='w-full my-2'> 
                        <label className='block mb-2 text-lg'>Job Posted By</label>
                        <input type="email" placeholder='Email' {...register("postedBy", { required: true })} className="create-job-input" />
                        </div> 
                        <button type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default UpdateJob;
