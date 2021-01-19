import React from 'react';

interface CardsProps {
    title: string;
    percents: string;
    income: string;
}

const Card: React.FC<CardsProps> = ({ title, percents, income }) => {
    return (
        <div className="card mt-5">
            <h5 className="card-header text-light bg-secondary d-flex ">
                <div className="text-left">
                    {title}
                </div>
                <div className="text-right">
                    {percents}%
                </div>
            </h5>
            <div className="card-body">
                <p>Você tem que investir R$ {Number(income) * Number(percents) / 100}</p>
            </div>
        </div>
    )
}

export default Card;