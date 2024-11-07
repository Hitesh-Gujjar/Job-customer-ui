import React, { useEffect, useState } from 'react'
import Layout from '../../Component/Layout';
import JobCard from '../../Component/JobCard';
import { callGetApi } from '../utiliti/Axios/axiosApi';
import { getApi } from '../utiliti/ApiCall';
// import Layout from '../../Component/LayOut'

function Home() {
  const [joblist, setJobList] = useState([]);

  const getApiCall = async () => {
    const getjoblist = await getApi('/job-list');

    if (getjoblist.status) {
      setJobList(getjoblist.data)
    }
  }

  useEffect(() => {
    getApiCall();
  }, []);

  useEffect(() => {
    console.log("joblist", joblist)
  }, [joblist]);

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-start my-5">Job Advertisements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {joblist.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home;