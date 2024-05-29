import { people } from "./DataPeople";
import { getImageUrl } from "./utilzaveiis";

    export default function Lista() {
        const chemists = people.filter(person => person.profession === 'chemist')
        const listItems = chemists.map(person =>
            <li>
                <img
                    src={getImageUrl(person)}
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    Know for {person.accomplishment}
                </p>
            </li>
        )
        return <ul>{listItems}</ul>
    }