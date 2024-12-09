import React from 'react';

const Text = ({ character, onDelete, onEditToggle }) => {
  return (
    <div className="mt-4 text-center">
      <p className="text-gray-600">{character.description}</p>
      <div className="mt-4 space-x-2">
        <button 
          onClick={() => onDelete(character.id)} 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
        <button 
          onClick={onEditToggle} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Text;
