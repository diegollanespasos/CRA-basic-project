import './Hobbies.css';

const Hobbies = ({ hobbies, showHobbies, count }) => {
    return (
        <div className='hobbies-container'>
            <h3>{showHobbies ? `Active Hobbies (black) : ${count(hobbies)}` : ''}</h3>
            {
                showHobbies 
                ? hobbies.map((hobbie, idx) => <p key={idx} className={`hobbie ${hobbie.isActive ? "" : "inactive"}`}>{`${hobbie.name}: ${hobbie.description}`}</p>) 
                : <p>{'Hobbies not allowed'}</p>
            }
        </div>
    )
}

export default Hobbies;