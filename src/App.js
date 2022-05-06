
import headshot from './images/TonyFordHeadshot.jpg'
import github from './images/GitHub.png'
import linkedin from './images/LinkedIn.png'
import gmail from './images/Gmail.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='greeting'>
        <div id='img'>
          <img id='headshot' src= {headshot}/>
        </div>
        
        <div id='nametext'>I'm Tony Ford.</div>
        
        <div id='greetingtext'> Full Stack Engineer based in Boone, NC.<br/> Trained with Per Scholas and Wilkes Community College.
        </div>
      </div>
        
        <div id='info'>
          I am Software Engineer apprentice with experience in troubleshooting and resolving issues. I am experienced in objectoriented programming with Node.js, Express.js, HTML and CSS. I have developed, tested, and debugged code with VS Code. I have designed interfaces with React and MondoDB. I am eager to learn and develop new skills in the IT field.
      </div>

      <div id='projects'>
      <label>Projects</label>
      </div>

      <div id='links'>
      <a href='https://github.com/TonyFord2002'><img id='github' src={github}/></a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <a href='https://www.linkedin.com/in/tonyford2002/'><img id='linkedin' src={linkedin}/></a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <a href="mailto:tonyford2002@gmail.com"><img id='gmail' src={gmail}/></a>
      </div>
    
    </div>    
  );
}

export default App;
