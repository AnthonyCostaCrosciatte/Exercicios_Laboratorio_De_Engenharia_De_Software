function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " FINISHED"}
            </del>
        )
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>John Marston's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="buy a terreno and make a House"
                />
                <Item
                    isPacked={false}
                    name="Send a invite for your wife and son"
                />
                <Item
                    isPacked={false}
                    name="Have a good and peaceful life"
                />
            </ul>
        </section>
    );
}