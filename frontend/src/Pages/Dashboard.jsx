import React from 'react';
import Card from '../Components/Card';
import InternshipCard from '../Components/internshipCard';
import { candidates, internships } from '../assets/data';
import { 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Briefcase,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Dashboard = () => {

  const totalCandidates = candidates.length;
  const approved = candidates.filter(c => c.status === 'Approved').length;
  const pending = candidates.filter(c => c.status === 'Pending').length;
  const rejected = candidates.filter(c => c.status === 'Rejected').length;
  const totalInternships = internships.length;
  const openInternships = internships.filter(i => i.status === 'Open').length;

  
  const approvalRate = totalCandidates > 0 
    ? Math.round((approved / totalCandidates) * 100) 
    : 0;

  
  const getStatusColor = (status) => {
    const colors = {
      'Approved': 'bg-green-100 text-green-700',
      'Rejected': 'bg-red-100 text-red-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Open': 'bg-blue-100 text-blue-700',
      'Closed': 'bg-gray-100 text-gray-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-6 space-y-6">
     
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">InternHub Dashboard</h1>
            <p className="text-indigo-100 mt-1">Overview of your internship program</p>
          </div>
          <div className="bg-white/10 p-2 rounded-lg">
            <p className="text-sm">Approval Rate</p>
            <div className="flex items-center">
              <span className="text-2xl font-bold">{approvalRate}%</span>
              {approvalRate >= 50 ? (
                <ArrowUp className="h-5 w-5 ml-1 text-green-300" />
              ) : (
                <ArrowDown className="h-5 w-5 ml-1 text-red-300" />
              )}
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card 
          title="Total Candidates" 
          value={totalCandidates} 
          trend="up"
          icon={<Users className="h-5 w-5" />}
        />
        <Card 
          title="Pending" 
          value={pending} 
          trend="neutral"
          icon={<Clock className="h-5 w-5" />}
        />
        <Card 
          title="Approved" 
          value={approved} 
          trend="up"
          icon={<CheckCircle className="h-5 w-5" />}
        />
        <Card 
          title="Rejected" 
          value={rejected} 
          trend="down"
          icon={<XCircle className="h-5 w-5" />}
        />
        <Card 
          title="Total Internships" 
          value={totalInternships} 
          trend="up"
          icon={<Briefcase className="h-5 w-5" />}
        />
        <Card 
          title="Open Internships" 
          value={openInternships} 
          trend="neutral"
          icon={<Briefcase className="h-5 w-5" />}
        />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Candidates</h2>
            <span className="text-sm text-gray-500">{candidates.length} total</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Internship</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {candidates.slice(0, 5).map((c, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="p-3">
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.email}</div>
                    </td>
                    <td className="p-3">{c.internship}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(c.status)}`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Available Internships</h2>
            <span className="text-sm text-gray-500">{openInternships} open</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {internships.slice(0, 4).map((internship) => (
              <InternshipCard 
                key={internship.id} 
                internship={internship}
                onClick={() => console.log('Internship clicked:', internship)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;