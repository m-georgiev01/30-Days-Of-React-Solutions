import './ThirdTask.css';
import ProflePic from '../../images/profile.jpg';

export function ThirdTask() {
  return (
    <div className="third-task-container">
      <div className="img-container">
        <img src={ProflePic} alt="profile"></img>
      </div>
      <h3>Martin Georgiev</h3>
      <p>Student at Plovdiv Universityv</p>
      <h3>SKILLS</h3>
      <div className="skills-container">
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>Js</span>
        <span>React</span>
        <span>Redux</span>
        <span>Node</span>
        <span>MongoDB</span>
        <span>Oracle</span>
        <span>Angular</span>
        <span>Data Analysis</span>
        <span>MySQL</span>
        <span>ASP.NET</span>
        <span>C#</span>
        <span>Java</span>
        <span>PHP</span>
      </div>
      <p>Joined on Aug 30, 2020</p>
    </div>
  );
}
