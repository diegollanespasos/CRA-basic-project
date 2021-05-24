export const countActiveHobbies = (arr) => {
    return arr.reduce((acc,current) => current.isActive ? acc+=1 : acc, 0);
}