import React, { useState } from 'react';

const EditForm = ({ character, onSave, onCancel }) => {
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [image, setImage] = useState(character.image);

  const handleSave = () => {
    onSave(character.id, name, description, image);
    onCancel();
  };

  return (
    <div className="mt-4 space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Character Name"
        className="w-full px-4 py-2 border rounded-md"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Character Description"
        className="w-full px-4 py-2 border rounded-md"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="w-full px-4 py-2 border rounded-md"
      />
      <div className="mt-4 space-x-2">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Save Changes
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditForm;
