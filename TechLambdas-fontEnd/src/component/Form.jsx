import React, { useState } from 'react';
import axios from 'axios';

export const Form = ({ onClose }) => {
  const [employee, setEmployee] = useState({
    employeeName: '',
    mobileNumber: '+91 ', 
    city: 'null', 
    gender: '',
    workType: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const apiUrl = 'http://localhost:8081/employee';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const validateRepetitiveNumber = (mobileNumber) => {
    const repeatedPattern = /^(.)\1{9}$/; 
    return !repeatedPattern.test(mobileNumber.substring(4));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employee.employeeName || !employee.mobileNumber || !employee.gender || !employee.workType) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!validateRepetitiveNumber(employee.mobileNumber)) {
      setErrorMessage('Mobile number cannot contain repetitive digits like 1111111111 or 9999999999.');
      return;
    }

    try {
      await axios.post(apiUrl, employee);
      onClose(); 
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-end z-10">
      <div className="bg-white rounded-lg shadow-lg w-[400px] h-[765px] mt-2 mr-2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          ×
        </button>
        <h3 className="font-bold text-xl text-gray-700 mb-4">Add New Employee</h3>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Employee Name</label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="text"
              name="employeeName"
              value={employee.employeeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="text"
              name="mobileNumber"
              value={employee.mobileNumber}
              onChange={handleChange}
              required
              maxLength="14" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">City (Optional)</label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="text"
              name="city"
              value={employee.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={employee.gender === 'Male'}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={employee.gender === 'Female'}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Female
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Work Type</label>
            <select
              name="workType"
              value={employee.workType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Work Type</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Receptionist">Receptionist</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
