import Image from 'next/image';

const CardIcon = ({ iconSrc, title, desc, desc1, desc2 }) => {
    return (
        <div className="col-span-3 cardSolucao">
            <div className="image">
                <Image
                    src={iconSrc}
                    alt={title}
                    width={60}
                    height={60}
                    priority
                />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <ul>
                    <li>{desc}</li>
                    <li>{desc1}</li>
                    <li>{desc2}</li>
                </ul>
            </div>
        </div>
    );
};

export default CardIcon;
