import { FaTrash, FaEdit,FaSignOutAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Form } from './Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import { useAuth } from '../AuthContext';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
  const navigate = useNavigate();  
  const { logout } = useAuth();

  const apiUrl = 'https://techlambdas.onrender.com/employee';

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(apiUrl);
      setEmployees(response.data);
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id)); // Remove from state
    } catch (error) {
      console.error('Failed to delete employee:', error);
    }
  };

  const handleEdit = (employee) => {
    setEditingId(employee.id);
    setEditEmployee({ ...employee });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditEmployee(null);
  };

  const handleChangeInTable = (e) => {
    const { name, value } = e.target;
    setEditEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNewClick = () => {
    setEditEmployee(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    fetchEmployees();  
  };
  const handleSaveEdit = async () => {
    const mobile = editEmployee.mobileNumber;
  
    if (!editEmployee.employeeName || !mobile || !editEmployee.gender || !editEmployee.workType) {
      alert('Please fill out all required fields.');
      return;
    }
    
    if (!/^\+91\s[0-9]{10}$/.test(mobile)) {
      alert('Invalid mobile number format');
      return;
    }    
  
    const formattedEmployee = {
      ...editEmployee,
      mobileNumber: mobile.startsWith('+91') ? mobile : `+91${mobile}`,
      city: editEmployee.city && editEmployee.city.trim().length === 0
        ? 'NA'
        : editEmployee.city || 'NA',
    };
  
    try {
      await axios.put(`${apiUrl}/${editingId}`, formattedEmployee);
      setEditingId(null);
      setEditEmployee(null);
      fetchEmployees();
    } catch (error) {
      console.error('Failed to update employee:', error);
    }
  };
  

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  return (
    <div className="relative flex h-screen font-['DM Sans']">
      <aside className="bg-[#1A1A40] text-white w-64 p-6 pt-10">
        <h1 className="text-2xl font-bold text-green-500">
          Tech<span className="text-white">Lambdas</span>
        </h1>
      </aside>

      <main className="flex-1 bg-white relative overflow-hidden">
      <div className="bg-white mb-10 p-6 border shadow-sm flex justify-between items-center">
          <h2 className="text-[20px] font-bold text-[#1FCB4F]">Employee View</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-2"
          >
            <FaSignOutAlt /> 
        
          </button>
        </div>
        <div className="flex justify-between items-center mb-4 px-6">
          <h3 className="font-medium text-gray-600">All Employee</h3>
          <button
            onClick={handleAddNewClick}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            + Add New
          </button>
          
        </div>
        <div className="overflow-x-auto px-[60px]">
          <table className="w-full border-collapse">
            <thead className="text-gray-700">
              <tr>
                <th className="text-left p-4">S.No</th>
                <th className="text-left p-4">Employee Name</th>
                <th className="text-left p-4">Mobile Number</th>
                <th className="text-left p-4">Location</th>
                <th className="text-left p-4">Gender</th>
                <th className="text-left p-4">Work Type</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-gray-500">
                    No employee is available
                  </td>
                </tr>
              ) : (
                employees.map((emp, index) => (
                  <tr key={emp.id} className={`${index % 2 === 0 ? 'bg-[#F7F6FE]' : 'bg-white'}`}>
                    <td className="p-4">{index + 1}</td>
                    {editingId === emp.id ? (
                      <>
                        <td className="p-4">
                          <input
                            name="employeeName"
                            value={editEmployee.employeeName}
                            onChange={handleChangeInTable}
                            className="border p-1 rounded"
                            required
                          />
                        </td>
                        <td className="p-4">
                        <input
                          name="mobileNumber"
                          value={editEmployee.mobileNumber.trim().length === 3 ? "+91 " : editEmployee.mobileNumber}
                          onChange={handleChangeInTable}
                          className="border p-1 rounded"
                          maxLength="14"
                          required
                          type="tel"  
                          inputMode="numeric" 
                          
                        />
                        </td>
                        <td className="p-4">
                          <input
                            name="city"
                            value={editEmployee.city}
                            onChange={handleChangeInTable}
                            className="border p-1 rounded"
                          />
                        </td>
                        <td className="p-4">
                          <select
                            name="gender"
                            value={editEmployee.gender}
                            onChange={handleChangeInTable}
                            className="border p-1 rounded"
                          >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </td>
                        <td className="p-4">
                          <select
                            name="workType"
                            value={editEmployee.workType}
                            onChange={handleChangeInTable}
                            className="border p-1 rounded"
                            required
                          >
                            <option value="">Select</option>
                            <option value="Receptionist">Receptionist</option>
                            <option value="Developer">Developer</option>
                            <option value="Tester">Tester</option>
                            <option value="DevOps">DevOps</option>
                          </select>
                        </td>
                        <td className="p-4 flex gap-2">
                          <button onClick={handleSaveEdit} className="text-green-600 hover:text-green-800">
                            Save
                          </button>
                          <button onClick={handleCancelEdit} className="text-gray-600 hover:text-gray-800">
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-4">{emp.employeeName}</td>
                        <td className="p-4">{emp.mobileNumber}</td>
                        <td className="p-4">{emp.city ? emp.city : 'NA'}</td>
                        <td className="p-4">{emp.gender}</td>
                        <td className="p-4">{emp.workType}</td>
                        <td className="p-4 flex gap-3">
                          <button
                            className="text-purple-600 hover:text-purple-800"
                            onClick={() => handleEdit(emp)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDelete(emp.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {showForm && (
          <Form onClose={handleCloseForm} initialData={editEmployee} />
        )}
      </main>
    </div>
  );
}
