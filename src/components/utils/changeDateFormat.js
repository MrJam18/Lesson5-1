export const chandeDateFormatOnRus = (date) => {
    const dateArray = date.split('-');
    const rightDate = dateArray.reduce((acc, date)=> {
        acc = date + '.' + acc;
        return acc;
    })
return rightDate;
}  