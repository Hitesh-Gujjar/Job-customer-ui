import React from 'react'
import Layout from '../../Component/Layout';
import JobCard from '../../Component/JobCard';
// import Layout from '../../Component/LayOut'

function Home() {

  
    const jobDetails = [
        {
          title: 'Frontend Developer',
          company: 'ABC Technologies',
          location: 'New York, NY',
          description: 'We are looking for a skilled frontend developer to join our team.',
          logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
        },
        {
          title: 'Backend Developer',
          company: 'XYZ Solutions',
          location: 'San Francisco, CA',
          description: 'Join our backend team to build scalable and robust applications.',
          logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
        },
        {
          title: 'Full Stack Developer',
          company: '123 Web Development',
          location: 'Chicago, IL',
          description: 'Exciting opportunity to work on both frontend and backend technologies.',
          logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
        },
        {
          title: 'UI/UX Designer',
          company: 'Design Co.',
          location: 'Seattle, WA',
          description: 'Create beautiful and intuitive user interfaces for our products.',
          logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
        },
        {
            title: 'Full Stack Developer',
            company: '123 Web Development',
            location: 'Chicago, IL',
            description: 'Exciting opportunity to work on both frontend and backend technologies.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
          {
            title: 'UI/UX Designer',
            company: 'Design Co.',
            location: 'Seattle, WA',
            description: 'Create beautiful and intuitive user interfaces for our products.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
          {
            title: 'Full Stack Developer',
            company: '123 Web Development',
            location: 'Chicago, IL',
            description: 'Exciting opportunity to work on both frontend and backend technologies.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
          {
            title: 'UI/UX Designer',
            company: 'Design Co.',
            location: 'Seattle, WA',
            description: 'Create beautiful and intuitive user interfaces for our products.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
          {
            title: 'Full Stack Developer',
            company: '123 Web Development',
            location: 'Chicago, IL',
            description: 'Exciting opportunity to work on both frontend and backend technologies.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
          {
            title: 'UI/UX Designer',
            company: 'Design Co.',
            location: 'Seattle, WA',
            description: 'Create beautiful and intuitive user interfaces for our products.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
          {
            title: 'Full Stack Developer',
            company: '123 Web Development',
            location: 'Chicago, IL',
            description: 'Exciting opportunity to work on both frontend and backend technologies.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
          {
            title: 'UI/UX Designer',
            company: 'Design Co.',
            location: 'Seattle, WA',
            description: 'Create beautiful and intuitive user interfaces for our products.',
            logoUrl: 'https://th.bing.com/th/id/OIP.kBq8I-GgUmggIRt-SjSgDgHaFj?rs=1&pid=ImgDetMain',
          },
      ];
    return (
        <Layout>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-start my-5">Job Advertisements</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {jobDetails.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Home;