import "./introduction.css";
import Avatar from "../../images/avatar.png";

const Introduction = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro-left">
        <div className="left-wrap">
          <div className="message">Hello, my name is</div>
          <div className="name">Siddharth Rana</div>
          <div className="title">
            <div className="title-wrap">
              <div className="title-item">Web Developer</div>
              <div className="title-item">Programmer</div>
              <div className="title-item">CS enthusiast</div>
            </div>
          </div>
          <p className="description">
            I am a sophomore at Indian Institute of Technology, Roorkee in the
            department of Computer Science and Engineering
          </p>
        </div>
      </div>
      <div className="intro-right">
        <img src={Avatar} alt="avatar" className="image" />
      </div>
    </div>
  );
};

export default Introduction;
