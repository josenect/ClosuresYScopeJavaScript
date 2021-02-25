
const buildCount = (i) => {
    let count = i 
    const displayCount = () => {
        console.log(count++)
    }

    return displayCount
}


let jose = buildCount(5)
jose()
jose()
jose()
