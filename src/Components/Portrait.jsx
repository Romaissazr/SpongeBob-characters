import React, { useState } from 'react';
import Text from './Text';
import EditForm from './EditForm';

const Portrait = ({ character, onDelete, onEdit }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  const handleEditToggle = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg cursor-pointer" onClick={handleToggleDetails}>
      <img src={character.image} alt={character.name} className="w-32 h-32 rounded-full object-cover" />
      <h3 className="mt-2 font-semibold text-xl">{character.name}</h3>

      {showDetails && !isEditing ? (
        <Text
          character={character}
          onDelete={onDelete}
          onEditToggle={handleEditToggle}
        />
      ) : null}

      {isEditing ? (
        <EditForm
          character={character}
          onSave={onEdit}
          onCancel={handleEditToggle}
        />
      ) : null}
    </div>
  );
};

export default Portrait;
