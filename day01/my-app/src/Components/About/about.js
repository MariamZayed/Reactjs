import Btn from'./../../SharedUi/Btn/btn';
import './about.css';

const About = () => {
    return (
        <div className="row p-4 m-3 d-flex align-items-center about">
            <div className="col-12 col-md-3  about">
                <span className="h1 text-center shadow-text">About Me</span>
            </div>
            <div className="col-12 col-md-9 ">
                <p className="regular-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <div>
                    <Btn btn="Download CV" href="#" />
                </div>
            </div>
        </div>
    );
};

export default About;