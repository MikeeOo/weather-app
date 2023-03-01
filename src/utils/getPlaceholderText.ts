const getPlaceholderText = (locationDataArrayLength: number): string => {
    if (locationDataArrayLength === 1) {
        return "Add one more ;))";
    } else if (locationDataArrayLength % 2 === 1) {
        return "Add more! ;)";
    }
    return "Search for location... ;)"
}

export default getPlaceholderText;