import './User.css';
import PropTypes from 'prop-types';

function User ({ avatar, name, description, age }) {
    return (
        <div className='user-container'>
            {avatar}
            <h2>{`Name: ${name}`}</h2>
            <p>{`Description: ${description}`}</p>
            <p>{`Age: ${age}`}</p>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    age: PropTypes.number
}

export default User;