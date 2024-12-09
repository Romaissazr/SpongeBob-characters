import React, { useState } from 'react';
import Portrait from './Components/Portrait';
import spong from './assets/Images/SpongeBob.svg'
import PatrickStar from './assets/Images/PatrickStar.svg'
import Squidward from './assets/Images/Squidward.svg'
import MrKrabs from './assets/Images/MrKrabs.svg'
import Sandy from './assets/Images/Sandy.svg'
const App = () => {
  const initialCharacters = [
    {
      id: 1,  // Add an id for each character
      name: 'SpongeBob SquarePants',
      description: 'A fun-loving, optimistic sponge who works as a fry cook at the Krusty Krab.',
      image:spong,
    },
    {
      id: 2,  // Add an id for each character
      name: 'Patrick Star',
      description: 'SpongeBob\'s best friend and a dim-witted yet lovable starfish.',
      image:PatrickStar,
    },
    {
      id: 3,  // Add an id for each character
      name: 'Squidward Tentacles',
      description: 'SpongeBob\'s grumpy, sarcastic co-worker and neighbor.',
      image: Squidward,
    },
    {
      id: 4,  // Add an id for each character
      name: 'Mr. Krabs',
      description: 'The money-obsessed owner of the Krusty Krab.',
      image: MrKrabs,
    },
    {
      id: 5,  // Add an id for each character
      name: 'Sandy Cheeks',
      description: 'A brilliant, adventurous squirrel from Texas who lives underwater in a dome.',
      image:Sandy,
    },
  ];

  const [characters, setCharacters] = useState(initialCharacters);

  const handleDelete = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  const handleEdit = (id, name, description, image) => {
    const updatedCharacters = characters.map(character =>
      character.id === id ? { ...character, name, description, image } : character
    );
    setCharacters(updatedCharacters);
  };

  return (
    <div className="flex flex-wrap gap-8 p-8">
      {characters.map(character => (
        <Portrait
          key={character.id}
          character={character}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default App;
