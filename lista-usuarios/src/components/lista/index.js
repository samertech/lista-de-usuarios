
import './Lista.css'

export const Lista=(props) =>{
    return(
        <div className="lista">
             <ul>
            <li>
                {props.nome}
            </li>
        </ul>

        </div>
       
    )
}