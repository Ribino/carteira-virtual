import React from "react";
import ReactDOM from 'react-dom';


const CollapseButton: React.FC<any> = (props) => {
    let collapse : boolean;

    function collapseText(){   
        let element = <div></div>;
        collapse = !collapse;
        if(collapse){
            element = <div>{props.children}</div>;
        }
        ReactDOM.render(element, 
            document.getElementById(props.idTarget));
    }

    return (
        <div className="collapseButton">
            <button className='button btn btn-outline-primary btn-sm' 
                onClick={() => { collapseText()} }
                type="button" >{props.labelButton}</button>          
        </div>
    );
}

// class CollapseButton extends React.Component {
//     collapse: boolean;
    
    
//     constructor(props : any){
//         super(props);
//         this.collapse = false;
//     }
    
//     collapseText(){   
//         let text = <div></div>;
//         this.collapse = !this.collapse;
//         if(this.collapse){
//             text = <div>Aaaa{this.props.children}</div>;
//         }
//         ReactDOM.render(text, 
//             document.getElementById("collapseCategorias"))
//     }

//     render(){
//         return (
//             <div className="collapseButton">
//                 <button className='button btn btn-outline-primary btn-sm'
//                     onClick={() => { this.collapseText()} }
//                     type="button" />          
        
//                     <div id="collapseCategorias">
//                     </div>
//             </div>
//         );
//     }
// }

export default CollapseButton;