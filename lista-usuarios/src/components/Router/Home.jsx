
import { users } from "../../data";
import { useNavigate } from "react-router-dom";
import { List } from "../List";




export const Home=()=>{
    const navigate = useNavigate();

    const handleClick = (item) => {
        const { id } = item;
        navigate(`/details/${id}`);
    }


return(
    <div>
    <h1>Home</h1>
    <List items={users} onItemClick={handleClick} />

  

</div>


)

}