export default function Fruits() {
    // const fruits = ["Apple", "Mango", "Orange", "Banana", "Pineapple" ]
    const fruits = [
        { name: "Apple", price: 10 },
        { name: "Mango", price: 7 },
        { name: "Banana", price: 2 },
        { name: "Orange", price: 5 },
        { name: "Pinepple", price: 8 },

    ];
    return ( 
    <div>
        <ul>
        {fruits.map((fruit) => (
        <li key={fruit.name}>{fruit.name}  $ {fruit.price}
        </li>
        ))}
        </ul>
        
        </div>
       
    )}