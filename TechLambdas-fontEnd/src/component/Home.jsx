import { FaTrash, FaEdit } from 'react-icons/fa';

const employees = [
  { id: 1, name: 'Ajith Kumar', mobile: '+91 9876543456', city: 'Kovilpatti', gender: 'Male', work: 'Cleaning' },
  { id: 2, name: 'Peter John', mobile: '+91 6754378908', city: 'Satur', gender: 'Male', work: 'Cleaning' },
  { id: 3, name: 'Prasath', mobile: '+91 7678654389', city: 'Tirunelveli', gender: 'Male', work: 'Receptionist' },
  { id: 4, name: 'Yuvaraj', mobile: '+91 5678907530', city: 'Sivagsai', gender: 'Male', work: 'Receptionist' },
  { id: 5, name: 'Karthik', mobile: '+91 7865439876', city: 'Kovilpatti', gender: 'Male', work: 'Receptionist' },
  { id: 6, name: 'Senthil', mobile: '+91 6789765423', city: 'Sangarankovil', gender: 'Male', work: 'Cleaning' },
];

export default function Home() {
  return (
    <div className="flex h-screen font-['DM Sans']">
      
      <aside className="bg-[#1A1A40] text-white w-64 p-6 pt-10">
        <h1 className="text-2xl font-bold text-green-500">Tech<span className="text-white">Lambdas</span></h1>
      </aside>


      <main className="flex-1  bg-white">
        <div className="bg-white mb-10 p-6 border shadow-sm">
            <h2 className="text-[20px] font-bold text-[#1FCB4F]">Employee View</h2>
        </div>


        <div className="flex justify-between items-center mb-4 px-6">
          <h3 className="font-medium text-gray-600">All Employee</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + Add New
         </button>
      </div>

        <div className="overflow-x-auto px-[60px]">
          <table className="w-full border-collapse">
            <thead className=" text-gray-700">
              <tr>
                <th className="text-left p-4">S.No</th>
                <th className="text-left p-4">Employee Name</th>
                <th className="text-left p-4">Mobile Number</th>
                <th className="text-left p-4">City</th>
                <th className="text-left p-4">Gender</th>
                <th className="text-left p-4">Work Type</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={emp.id} className={`${index % 2 === 0 ? 'bg-[#F7F6FE]' : 'bg-white'}`}>
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{emp.name}</td>
                  <td className="p-4">{emp.mobile}</td>
                  <td className="p-4">{emp.city}</td>
                  <td className="p-4">{emp.gender}</td>
                  <td className="p-4">{emp.work}</td>
                  <td className="p-4 flex gap-3">
                    <button className="text-purple-600 hover:text-purple-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
