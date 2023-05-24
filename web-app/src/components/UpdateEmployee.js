import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateEmployee = () => {

  const { empId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [empType, setEmpType] = useState('');
  const [experience, setExperience] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/edit/' + empId)
      .then(res => {
        setName(res.data[0].name);
        setDesignation(res.data[0].designation);
        setEmpType(res.data[0].empType);
        setExperience(res.data[0].experience);
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/update/' + empId, { name, designation, empType, experience })
      .then(res => {
        if (res.data.updated) {
          navigate('/')
        } else {
          alert("Not updated");
        }
      })
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <form onSubmit={handleSubmit}>

        <div className="border-gray-900/10 pb-12">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-200">
            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
              Update Employee {empId}
            </h3>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
              <label htmlFor="display-name" className="block text-sm font-medium leading-6 text-gray-900">
                Preferred / Display Name
              </label>
              <div className="mt-2">
                <input
                  name='name'
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                Designation
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name='designation'
                  value={designation}
                  onChange={e => setDesignation(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="emptype" className="block text-sm font-medium leading-6 text-gray-900">
                Employee Type
              </label>
              <div className="mt-2">
                <select
                  name='empType'
                  value={empType}
                  onChange={e => setEmpType(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled selected hidden>Employee Types</option>
                  <option value="Full time">Full time</option>
                  <option value="Part Time">Part time</option>
                  <option value="Contract Basis">Contract Basis</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                Experience
              </label>
              <div className="mt-2">
                <select
                  name='experience'
                  value={experience}
                  onChange={e => setExperience(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled selected hidden>Years</option>
                  <option value="01 Year">01 Year</option>
                  <option value="02 Years">02 Years</option>
                  <option value="03 Years">03 Years</option>
                  <option value="04 Years">04 Years</option>
                  <option value="05 Years">05 Years</option>
                  <option value="06 Years">06 Years</option>
                  <option value="07 Years">07 Years</option>
                  <option value="08 Years">08 Years</option>
                  <option value="09 Years">09 Years</option>
                  <option value="09+ Years">09+ Years</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/" type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;
