import React from 'react';

export default function BasicModal({  setDisplayModel }) {

    const [selectedCourse, setSelectedCourse] = React.useState('');
    const [selectedYear, setSelectedYear] = React.useState('');
    const [selectedBranch, setSelectedBranch] = React.useState('');

    const courses = [
        "",
        'BCA',
        'BTech',
        'BBA',
        'BCom',
        'MBA'
    ];

    const years = [
        "",
        2024,
        2023,
        2021,
        2020
    ];

    const branchData = {
        BTech: [
            { branchName: 'Computer Science', year: 2024 },
            { branchName: 'Electrical Engineering', year: 2024 },
            { branchName: 'Mechanical Engineering', year: 2024 },
            { branchName: 'Civil Engineering', year: 2024 },
            { branchName: 'Chemical Engineering', year: 2024 }
        ],
        BCA: [
            { branchName: 'Computer Science', year: 2024 },
            { branchName: 'Information Technology', year: 2024 },
            { branchName: 'Software Engineering', year: 2024 }
        ],
        BBA: [
            { branchName: 'Finance', year: 2024 },
            { branchName: 'Marketing', year: 2024 },
            { branchName: 'Human Resources', year: 2024 }
        ],
        BCom: [
            { branchName: 'Accounting', year: 2024 },
            { branchName: 'Business Studies', year: 2024 },
            { branchName: 'Economics', year: 2024 }
        ],
        MBA: [
            { branchName: 'Finance', year: 2024 },
            { branchName: 'Marketing', year: 2024 },
            { branchName: 'Operations', year: 2024 }
        ]
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        setSelectedYear('');
        setSelectedBranch('');
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setSelectedBranch('');
    };

    const handleBranchChange = (e) => {
        setSelectedBranch(e.target.value);
    };

    const handleSubmit = () => {
        alert(`Course: ${selectedCourse}, Year: ${selectedYear}, Branch: ${selectedBranch}`);
    };

    const closeModal = () => {
        setDisplayModel(false);
    };

   

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={closeModal} className="close-button">X</button>
                <div className='flex items-center justify-center min-h-screen'>
                    <div className='bg-white p-6 rounded shadow-md w-1/4'>
                        <label htmlFor="courseDropdown" className='block mb-2 text-lg font-medium text-gray-700'>
                            Select Course:
                        </label>
                        <select
                            id="courseDropdown"
                            className='border border-gray-300 rounded p-2 w-full'
                            value={selectedCourse}
                            onChange={handleCourseChange}
                        >
                            {courses.map((course, index) => (
                                <option key={index} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>

                        {selectedCourse && (
                            <>
                                <label htmlFor="yearDropdown" className='block mb-2 text-lg font-medium text-gray-700 mt-4'>
                                    Select Year:
                                </label>
                                <select
                                    id="yearDropdown"
                                    className='border border-gray-300 rounded p-2 w-full'
                                    value={selectedYear}
                                    onChange={handleYearChange}
                                >
                                    {years.map((year, index) => (
                                        <option key={index} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </>
                        )}

                        {selectedCourse && selectedYear && branchData[selectedCourse] && (
                            <>
                                <label htmlFor="branchDropdown" className='block mb-2 text-lg font-medium text-gray-700 mt-4'>
                                    Select Branch:
                                </label>
                                <select
                                    id="branchDropdown"
                                    className='border border-gray-300 rounded p-2 w-full'
                                    value={selectedBranch}
                                    onChange={handleBranchChange}
                                >
                                    <option value="" disabled>Select a branch</option>
                                    {branchData[selectedCourse].filter(branch => branch.year === parseInt(selectedYear)).map((branch, index) => (
                                        <option key={index} value={branch.branchName}>
                                            {branch.branchName}
                                        </option>
                                    ))}
                                </select>
                            </>
                        )}
                        <div className='text-center'>
                            <button
                                onClick={handleSubmit}
                                disabled={!selectedCourse || !selectedYear || !selectedBranch}
                                className={`mt-4 w-1/2 p-2 rounded ${!selectedCourse || !selectedYear || !selectedBranch ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
