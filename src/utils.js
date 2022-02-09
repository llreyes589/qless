export const sortArray = (array) => {
    [array].reverse()
}

export const addYear = (date, addend) => {
    return new Date(date.setFullYear(date.getFullYear() + addend)).toDateString();
}

export const addMonth = (date, addend) => {
    const d = new Date(date)
    d.setMonth(addend)
    return d;

}

export const lapseCheck = (due, now) =>{
    // const 

}