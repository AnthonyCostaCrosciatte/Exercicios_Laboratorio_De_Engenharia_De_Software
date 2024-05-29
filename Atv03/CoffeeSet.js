function Cup({ guest }) {
    return <h2>Make a Coffee cup for guest messiur! {guest}</h2>;
}

export default function CupOfCoffeeSet() {
    let cups = [];
    for (let i = 1; i < 2; i++) {
        cups.push(<Cup key={i} guest={i} />)
    }
    return cups
}