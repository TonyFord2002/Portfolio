
import headshot from './images/TonyFordHeadshot.jpg'
import github from './images/GitHub.png'
import linkedin from './images/LinkedIn.png'
import gmail from './images/Gmail.png'
import worktracker from './images/WorkTracker.png'
import memorygame from './images/MemoryGame.png'
import sailingblog from './images/SailingBlog.png'
import hexadle from './images/Hexadle.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav id='navbar'>
        <a id = 'aboutlink' href = '#about-section'>About</a> |
        <a id = 'projectlink' href = '#project-section'>Projects</a> |
        <a id = 'contactlink' href = '#contact-section'>Contact Me</a>
      </nav>
      <div id='greeting'>
        <div id='img'>
          <img id='headshot' src= {headshot} alt='headshot'/>
        </div>
        
        <div id='nametext'>I'm Tony Ford.</div>
        
        <div id='greetingtext'> Full Stack Engineer based in Boone, NC.<br/> Trained with Per Scholas and Wilkes Community College.
        </div>
      </div>
       <section id = 'about-section'>
        <div id='info'>
         <div id = 'abouttext'>About Me</div>
          I am a Full-Stack Software Engineer apprentice with experience in troubleshooting and resolving issues. I am experienced in object oriented programming with Node.js, Express.js, HTML and CSS. I have developed, tested, and debugged code with VS Code. I have designed interfaces with React and MongoDB. I am eager to learn and develop new skills in the IT field.
      </div>
      </section>
      <section id ='project-section'>
          <div id='projecttext'>Projects</div>
        <div id='projects'>
          <div id='project1'><a id ='img1link' href = 'https://worktrackerapp.herokuapp.com/'>Work Tracker App<br/><img id ='img1' src = {worktracker}/></a><p id='p1'>This is a custom app I created for my Dad. He uses it to keep track of the work he's done for clients and the workers that were on each job. It keeps a running total of each client's bill at the end of all the jobs finished.</p></div>
          <div id='project2'><a id = 'img2link' href ='https://tonyford2002.github.io/MemoryGame/'> Memory Game<br/><img id ='img2' src = {memorygame}/></a><p>This is an app I made for my fiance's first grade class. She can put it on the whiteboard and two students can play. The cards use their spelling words to help with recognition.</p></div>
          <div id='project3'><a id = 'img3link' href = 'https://tony-sailing-blog.herokuapp.com/'>Sailing Blog<br/><img id ='img3' src = {sailingblog}/></a><p>This is a personal blog I created for myself. I am very much into sailing and the cruising lifestyle. My end goal is to own a yacht large enough for my family to sail around the world with.</p></div>
          <div id='project4'><a id = 'img4link' href = 'https://tonyford2002.github.io/Hexadle/'>Hexadle<br/><img id ='img4' src = {hexadle}/></a><p>This was a fun code along tutorial that I modified to make my own. It is a Wordle like app that instead of 5 letters it uses 6 for more of a challenge. It pulles from more than 15,700 words legal to use in scrabble and words-with-friends.</p></div>
        </div>
      </section>
      <section id = 'contact-section'>
        <div id='links'>
      <div id='contacttext'>Contact Me</div>
        <a id='githubtext' href='https://github.com/TonyFord2002'><img id='github' src={github} alt='GitHubIcon'/></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <a id='linkedintext' href='https://www.linkedin.com/in/tonyford2002/'><img id='linkedin' src={linkedin} alt='LinkedInIcon'/></a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <a id='gmailtext' href="mailto:tonyford2002@gmail.com"><img id='gmail' src={gmail} alt='GmailIcon'/>TonyFord2002@gmail.com</a>
        </div>
      </section>
    </div>    
  );
}

export default App;
