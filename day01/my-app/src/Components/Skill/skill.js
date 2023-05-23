import Bar from "../../SharedUi/Bar/bar";
import "./skill.css";
const Skill = () => {
    return (
        <div className=" bg py-5  text-center text-light main">
            <div className="container">
                <h1 className="pb-3">Skills</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </p>
            </div>
            <div className="row mx-0">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-4 middle">
                    <ul className="list-unstyled h5">
                        <li className="h3 text-uppercase ">Test Test Test</li>
                        <li>
                            <hr className="bg-light"></hr>
                        </li>
                        <li>Test Test</li>
                        <li>Test Test</li>
                        <li>Test Test</li>
                        <li>Test Test</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className="text-uppercase">
                        My Skills
                    </h3>

                    <ul className="list-unstyled  text-start ps-5">
                        <Bar label="HTML" progress="80" />
                        <Bar label="CSS" progress="80" />
                        <Bar label="JS" progress="90" />
                        <Bar label="PHP" progress="50" />
                        <Bar label="Test" progress="40" />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skill;