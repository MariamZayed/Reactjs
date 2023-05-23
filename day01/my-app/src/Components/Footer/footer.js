import Btn from "../../SharedUi/Btn/btn";
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';


// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div className="bg-black mb-1 text-light text-center foot">
            <div className="row mx-0 my-3 py-4 ">
                <div className="col-12 col-md-6 col-lg-4">
                    <p>
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                        email@gmail.com
                    </p>
                    <p>
                        {/* <FontAwesomeIcon icon={faPhone} /> */}
                        +201223317145
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Btn btn="Contact Me" href="#Contact" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex align-content-center flex-column">
                    <div>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <span> Twitter</span>
                    </div>
                    <div>
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <span> Linkedin</span>

                    </div>
                    <div>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <span> Facebook</span>

                    </div>
                </div>
            </div>
            <div className="row ">
                <p>Copyright &copy; Test Test</p>
            </div>
        </div>
    );
};

export default Footer;  