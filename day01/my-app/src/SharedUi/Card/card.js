import './card.css';
const Card = (props) => (
    <div className="col-12 col-md-6 col-lg-4 my-3">
        <div className="card cardBG p-5 text-center text-light">
            {props.content}
        </div>
    </div>
);

export default Card;