import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import AddEmployee from "./AddEmployee";


const EmployeeList = () => {

    const [employee, setEmployee] = useState({ data: [] });
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(res => setEmployee({ data: res.data }))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (empId) => {
        axios.delete('http://localhost:5000/' + empId)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    const openCreateModal = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setShowCreateModal(false);
    };

    return (

        <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">People</h2>
                </div>
                <div className="flex items-center justify-between">
                    <div className="lg:ml-40 ml-10 space-x-8">
                        <select name="empType" className="px-4 py-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option disabled selected hidden>Employee Types</option>
                            <option>Full time</option>
                            <option>Part time</option>
                            <option>Contract Basis</option>
                            <option>Other</option>
                        </select>
                        <button onClick={openCreateModal} className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Add People</button>
                        <Modal isOpen={showCreateModal} onRequestClose={closeCreateModal}>
                            <AddEmployee closeCreateModal={closeCreateModal} />
                        </Modal>

                    </div>
                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600">
                                        Display Name
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600">
                                        Emp ID
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600">
                                        Designation
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600">
                                        Emp. Type
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600">
                                        Experience
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {employee.data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{data.name}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{data.empId}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{data.designation}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{data.empType}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{data.experience}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center gap-x-6">
                                                    <Link to={`/edit/${data.empId}`} className="text-blue-500 transition-colors duration-200">Edit</Link>
                                                    <button onClick={() => handleDelete(data.empId)} className="text-red-500 transition-colors duration-200">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EmployeeList;
