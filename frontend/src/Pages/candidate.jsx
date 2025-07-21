import React, { useState } from 'react';
import { X } from 'lucide-react';
import {candidates as initialCandidates} from '../assets/data'

const CandidatePage = () => {

  const availableInternships = [
    'Frontend Developer',
    'Backend Developer',
    'UX Designer',
    'Data Analyst'
  ];

  
  const [candidates, setCandidates] = useState(initialCandidates);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    internship: '',
    status: 'Pending'
  });


  const handleAddCandidate = (e) => {
    e.preventDefault();
    
    const newCandidate = {
      id: candidates.length + 1,
      ...formData
    };
    
    setCandidates([...candidates, newCandidate]);
    setFormData({ name: '', email: '', internship: '', status: 'Pending' });
    setIsModalOpen(false);
  };

 
  const handleStatusUpdate = (id, newStatus) => {
    setCandidates(candidates.map(candidate => 
      candidate.id === id ? { ...candidate, status: newStatus } : candidate
    ));
  };

  const filteredCandidates = candidates.filter(candidate => {
    const searchLower = searchTerm.toLowerCase();
    return (
      candidate.name.toLowerCase().includes(searchLower) ||
      candidate.email.toLowerCase().includes(searchLower) ||
      candidate.internship.toLowerCase().includes(searchLower)
    );
  });

  const getStatusStyle = (status) => {
    if (status === 'Approved') return 'bg-green-100 text-green-600';
    if (status === 'Rejected') return 'bg-red-100 text-red-600';
    return 'bg-yellow-100 text-yellow-600';
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
    
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Candidate Management</h1>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search candidates..."
            className="border border-gray-300 p-2 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap"
          >
            Add Candidate
          </button>
        </div>
      </div>

     
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Internship</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map(candidate => (
                <tr key={candidate.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{candidate.name}</td>
                  <td className="p-3">{candidate.email}</td>
                  <td className="p-3">{candidate.internship}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(candidate.status)}`}>
                      {candidate.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    {candidate.status !== 'Approved' && (
                      <button
                        onClick={() => handleStatusUpdate(candidate.id, 'Approved')}
                        className="text-green-600 hover:text-green-800"
                      >
                        Approve
                      </button>
                    )}
                    {candidate.status !== 'Rejected' && (
                      <button
                        onClick={() => handleStatusUpdate(candidate.id, 'Rejected')}
                        className="text-red-600 hover:text-red-800"
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No candidates found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Add New Candidate</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddCandidate} className="p-4 space-y-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full p-2 border rounded"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block mb-1">Internship</label>
                <select
                  required
                  className="w-full p-2 border rounded"
                  value={formData.internship}
                  onChange={(e) => setFormData({...formData, internship: e.target.value})}
                >
                  <option value="">Select internship</option>
                  {availableInternships.map((internship, index) => (
                    <option key={index} value={internship}>{internship}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block mb-1">Status</label>
                <select
                  className="w-full p-2 border rounded"
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidatePage;