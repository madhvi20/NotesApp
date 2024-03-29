import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';


import NotesList from './components/NotesList';
const App= () => {
  const[notes,setNotes]=useState([
    {
    id: nanoid(),
text:"this is my",
date:"15/05/2021"},
{
  id: nanoid(),
text:"this is my",
date:"15/05/2021"},
{
  id: nanoid(),
text:"this is my",
date:"15/05/2021"},
{
  id: nanoid(),
text:"this is my",
date:"15/05/2021"}




]);
const[searchText, setSearchText]= useState('');

const [darkMode,setDarkMode] = useState(false);
useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
})
useEffect(() => {
  localStorage.setItem('react-notes-app-data ',
  JSON.stringify(notes)
  );
},[notes]);


const addNote=(text) => {
  const date=new Date();
  const newNote={
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes=[...notes,newNote];
  setNotes(newNotes);

};
const deleteNote =(id) =>{
 const  newNotes= notes.filter((note)=> note.id !== id);
 setNotes(newNotes);
}


  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
          <Header handleToggleDarkMode={setDarkMode}/>
          <Search handleSearchNote={setSearchText}/>
          <NotesList 
          notes={notes.filter((note)=>
            note.text.toLowerCase().includes(searchText)
            )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
     />
       </div> ;
    </div>
  );
};


export default App;
