
const today = new Date()

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date)
}

const person = {
    name: 'Ellie williams',
    theme: {
        backgroundColor: 'purple',
        color: 'Red'
    }
}

export default function TodoList() {
    const nome = 'Ellie Williams'

    return (
        <>
            <div style={person.theme}>
                <h1>{person.name}'s </h1>
                <img src="https://th.bing.com/th/id/OIP.oh2Y1NPVI99dqMFKcj-_hgAAAA?rs=1&pid=ImgDetMain" alt="Joel Miller" />
            </div>

            <h1>To do List for {formatDate(today)}</h1>
            <h1>{nome}'s To Do List</h1>
            <img src="https://static.miraheze.org/loathsomecharacterswiki/thumb/5/5d/Abby_Anderson.jpg/800px-Abby_Anderson.jpg" alt="Alvo - Abby Anderson" />
            <ul>
                <li>Kill abby...and finish the Joel vingance</li>
                <li>Make a new life with Dina and J.J.J</li>
                <li>Be Happy forever and touch guitar very much</li>
            </ul>
        </>
    )
}