import React from "react";

const JobCard = ({ job }) => {

    // {
    //     "_id": "66b975af15a5b2af5ec46f8f",
    //     "company_name": "Ethics Infotech llp",
    //     "designation": "React js Devloper",
    //     "job_title": "React Devloper",
    //     "email": "ethics@test.com",
    //     "contact_no": 9662258707,
    //     "gender": "male",
    //     "isActive": false,
    //     "industry_type": "services",
    //     "role": "software devloper",
    //     "description_company": "React, typescript, javascript, css",
    //     "key_skill": "React, typescript, javascript, css",
    //     "createdAt": "2024-08-12T02:38:39.286Z",
    //     "updatedAt": "2024-08-26T06:11:37.053Z",
    //     "__v": 0,
    //     "userId": "66bf14924c22eac599491bbf"
    // }

    const { job_title, company_name, key_skill, description_company, logoUrl } = job;

    return (
        <div className=" bg-white-900 shadow-md rounded-lg p-4">
            <div className="flex items-center mb-2">
                <img src={logoUrl} alt={company_name} className="h-12 w-12 object-contain rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{job_title}</h2>
                    <p className="text-sm text-gray-600">{company_name}</p>
                </div>
            </div>
            <div>
                <p className="text-sm text-gray-600">{key_skill}</p>
                <span className="text-gray-700 text-xs">{description_company}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobCard;
