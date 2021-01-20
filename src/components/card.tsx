import React from 'react';
import CollapseButton from './collapseButton';

interface CardsProps {
    title: string;
    percents: string;
    income: string;
}



const Card: React.FC<CardsProps> = ({ title, percents, income }) => {

    return (
        <div className="card mt-5">
            <h5 className="card-header text-light bg-secondary">
                <div className="text-left">
                    {title}
                </div>
                <div className="text-right">
                    {percents}%
                </div>
            </h5>
            <div className="card-body">
                {Number(income) > 0 ?
                    <p>Você tem que investir R$ {Number(income) * Number(percents) / 100}</p> 
                    : 
                    <p>Você tem que investir R$ 0.00</p>
                }
                <div className="row mt-3 md-5 justify-content-end">
                    <CollapseButton labelButton="Ver Categorias" idTarget={`collapse${title}`}>Conteudo a exibir</CollapseButton>
               </div>
               <div id={`collapse${title}`}> </div>

            </div>
        </div>
    )
}

export default Card;