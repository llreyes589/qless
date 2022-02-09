export const sortArray = (array) =>{
    [array].reverse()
}

export const addYear = (date, addend) =>{
    return new Date(date.setFullYear(date.getFullYear() + addend)).toDateString(); 

}