import Card from './../../SharedUi/Card/card';
import './portfolio.css';

const Portfolio = ()=>{
    return (
        <div className="container portfolio">
            <div className="pt-3 mt-3">
                <h1 className="text-center">Test test</h1>
            </div>
            <div className="row ">

                <Card
                    content="Node.js"
                />

                <Card
                    content="React.js"
                />

                <Card
                    content="Express.js"
                />

                <Card
                    content="MongoDB"
                />

                <Card
                    content="Bootstrap"
                />

                <Card
                    content="Material UI"
                />
            </div>
        </div>
    );
}

export default Portfolio;