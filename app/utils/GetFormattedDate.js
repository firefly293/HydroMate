

export function GetFormattedDate() {
    var today = new Date()
    var dd = today.getDate().toString()
    var mm = (today.getMonth() + 1).toString()
    var yyyy = today.getFullYear().toString()

    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm

    return mm + '-' + dd + '-' + yyyy;

}


export function AddOneDay(dateString) {
    const [month, day, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    const newMonth = String(date.getMonth() + 1).padStart(2, '0');
    const newDay = String(date.getDate()).padStart(2, '0');
    const newYear = date.getFullYear();
    return `${newMonth}-${newDay}-${newYear}`
}


export function SubtractOneDay(dateString) {
    const [month, day, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    const newMonth = String(date.getMonth() + 1).padStart(2, '0');
    const newDay = String(date.getDate()).padStart(2, '0');
    const newYear = date.getFullYear();
    return `${newMonth}-${newDay}-${newYear}`
}
