const Hobbies = ({ hobbies, showHobbies, count }) => {
    return (
        <div>
            <p>{`Count: ${count(hobbies)}`}</p>
            {
                showHobbies ? hobbies.map(hobbie => <p>{`${hobbie.name}: ${hobbie.description}`}</p>) : <p>{'Hobbbies not allowed'}</p>
            }
        </div>
    )
}

export default Hobbies;