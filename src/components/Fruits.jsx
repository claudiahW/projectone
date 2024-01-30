import Fruit from "./Fruit";

export default function Fruits() {
    // const fruits = ["Apple", "Mango", "Orange", "Banana", "Pineapple" ]
    const fruits = [
        { name: "Apple", price: 10 , soldout:true},
        { name: "Mango", price: 7, soldout:false },
        { name: "Banana", price: 2, soldout:true },
        { name: "Orange", price: 5, soldout:false },
        { name: "Pinepple", price: 8, soldout:true },
    ];
    return ( 
    <div>
        <ul>
        {fruits.map((fruit) => (
        <Fruit 
        key={fruit.name} 
        name={fruit.name} 
        price={fruit.price}
        soldout={fruit.soldout}
        />
        ))}
        </ul>
        </div>
    ); 
    }