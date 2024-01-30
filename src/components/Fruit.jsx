export default function Fruit({name, price}) {
    return (
     <>
     
        {price > 5 ? (
             <li>
             {name} {price} 
             </li>
        ) : ( 
            ""
            )}
        </> 
    );
}