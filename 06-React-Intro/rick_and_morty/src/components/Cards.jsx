import Card from './Card';




export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(character => (
         <h1
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         key={character.name}
         onClose={() => window.alert('Emulamos que se cierra la card')}/>
       ))}
   </div>;

      }