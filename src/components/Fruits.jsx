export default function Fruits() {
    const fruits = ["Apple", "Mango", "Orange", "Banana", "Pineapple" ]
    return ( <div>
        <ul>
        {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
        ))}
        </ul>
        </div>
        );
}