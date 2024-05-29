export function getImageUrl(people, size = 's') {
    return (
        'https://i.imgur.com/' +
        people.imageId +
        size +
        '.jpg'
    )
}