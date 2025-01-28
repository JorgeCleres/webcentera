const CardIcon = ({ number, title, desc }) => {
    return (
        <div className="col-span-3 card">
            <div className="image">
                <h4>{number}</h4>
            </div>
            <div className="text">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default CardIcon;
