import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import './App.css';
import notes from '../notes'

// console.log(notes);

function App() {
  return (
    <div className="App">
       <Header />
       {notes.map((value)=>{
          return (
          <Note
          key = {value.key}
          title= {value.title}
          content={value.content}
          />
       );
       })}
       <Footer />        
    </div>
  );
}

export default App;
