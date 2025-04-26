import React, { useState } from 'react';
import axios from 'axios';

export const Form = ({ onClose }) => {
  const [employee, setEmployee] = useState({
    employeeName: '',
    mobileNumber: '',
    city: '',
    gender: '',
    workType: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const apiUrl = 'http://localhost:8081/employee';

  const validateMobileNumber = (mobileNumber) => {
    const repeatedPattern = /^(\d)\1{9}$/;
    if (!/^\+91\s[0-9]{10}$/.test(mobileNumber)) {
      alert('Invalid mobile number format.');
      return false;
    }
    if (repeatedPattern.test(mobileNumber.substring(4))) {
      alert('Mobile number cannot contain repetitive digits like 1111111111.');
      return false;
    }
    return true;
  };

  const formatMobileNumber = (mobileNumber, setEmployee) => {
    let input = mobileNumber;
    if (!input.startsWith("+91 ")) {
      input = "+91 " + input.replace(/^\+91\s*/, ""); 
    }
    const numberPart = input.slice(4).replace(/\D/g, ""); 
    const finalInput = "+91 " + numberPart;

    if (numberPart.length <= 10) {
      setEmployee((prev) => ({
        ...prev,
        mobileNumber: finalInput,
      }));
    }
  };

  const handleClick = (employee, setEmployee) => {
    if (employee.mobileNumber.length === 0) {
      setEmployee((prev) => ({
        ...prev,
        mobileNumber: "+91 ",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employee.employeeName || !employee.mobileNumber || !employee.gender || !employee.workType) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!validateMobileNumber(employee.mobileNumber)) {
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
            <label className="block text-gray-700">Employee Name<span className="text-red-500">*</span></label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="text"
              name="employeeName"
              placeholder="ex: rosan"
              value={employee.employeeName}
              onChange={(e) => setEmployee({ ...employee, employeeName: e.target.value })}
              required
            />
          </div>
      
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number<span className="text-red-500">*</span></label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="text"
              name="mobileNumber"
              placeholder="+91 9025682686"
              value={employee.mobileNumber}
              onChange={(e) => formatMobileNumber(e.target.value, setEmployee)} 
              onClick={() => handleClick(employee, setEmployee)} 
              required
              maxLength="14"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              className="w-full px-4 py-2 border rounded-md"
              type="text"
              name="city"
              placeholder="Tirunelveli"
              value={employee.city}
              onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Gender<span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={employee.gender === 'Male'}
                  onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
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
                  onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
                  className="mr-2"
                  required
                />
                Female
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Work Type<span className="text-red-500">*</span></label>
            <select
              name="workType"
              value={employee.workType}
              onChange={(e) => setEmployee({ ...employee, workType: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Work Type</option>
              <option value="Receptionist">Receptionist</option>
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>
              <option value="DevOps">DevOps</option>
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
