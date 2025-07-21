import React from 'react';

const InternshipCard = ({ internship, onClick }) => {
 
  const statusStyles = {
    Open: 'bg-green-100 text-green-800',
    Closed: 'bg-red-100 text-red-800',
    Draft: 'bg-gray-100 text-gray-800',
  };

  
  const statusStyle = statusStyles[internship.status] || statusStyles.Draft;
  const statusText = internship.status || 'Draft';

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
    
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {internship.title || 'Untitled Internship'}
        </h3>
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${statusStyle}`}>
          {statusText}
        </span>
      </div>
      
      
      {internship.description && (
        <p className="text-sm text-gray-600 mb-3">
          {internship.description}
        </p>
      )}
      
     
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {internship.department || 'No department specified'}
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
          {internship.duration || '?'} weeks
        </span>
        {internship.stipend && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            ${internship.stipend} stipend
          </span>
        )}
      </div>
      
     
      {internship.skills && internship.skills.length > 0 && (
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Skills required:</p>
          <div className="flex flex-wrap gap-1">
            {internship.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


InternshipCard.defaultProps = {
  onClick: () => console.log('Card clicked!'),
};

export default InternshipCard;