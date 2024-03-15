import './FirstTask.css';
import HTML from '../../images/html5.png';
import CSS from '../../images/css.png';
import JS from '../../images/js.png';
import ReactImg from '../../images/react.png';

export function FirstTask() {
  return (
    <>
      <h3>Front End Technologies</h3>
      <div className="container">
        <img className="img-tech" src={HTML} alt="html logo"></img>
        <img className="img-tech" src={CSS} alt="html logo"></img>
        <img className="img-tech" src={JS} alt="html logo"></img>
        <img className="img-tech" src={ReactImg} alt="html logo"></img>
      </div>
    </>
  );
}
