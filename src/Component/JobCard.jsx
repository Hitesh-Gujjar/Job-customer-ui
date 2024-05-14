import React from "react";

const JobCard = ({ job }) => {
    const { title, company, location, description, logoUrl } = job;

    return (
        <div className=" bg-gray-100 shadow-lg rounded-lg p-6 mb-4">
            <div className="flex items-center mb-4">
                <img src={logoUrl} alt={company} className="h-12 w-12 object-contain rounded-full mr-4" />
                <div>
                    <p className="text-sm text-gray-600">{company}</p>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 mb-2">{location}</p>
                <p className="text-gray-700">{description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobCard;
