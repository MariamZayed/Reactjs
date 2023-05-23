const Bar = ({ label, progress }) => (
    <div className="progress-bar my-2">
        <div className="bg-light">
            <div
                className="bg-dark bg-opacity-10 text-start py-2"
                style={{ width: `${progress}%` }}
            >
                <span className="px-3 py-3 bg-dark">{label}</span>
            </div>
        </div>
    </div>
);

export default Bar;