import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience =  ({experience: {

    company,
    title,
    location,
    current,
    to,
    from,
    description
}})  => {
    return (
        <div>
           <h3 className="text-dark">{ company }</h3> 

           <p className="text-dark">
               <Moment format="YYYY/MM/DD">{ from }</Moment> - {!to ? 'Now' : <Moment format="YYYY/MM/DD">{ to }</Moment>}
           </p>

           <p className="text-dark">
               <strong>Position: </strong> { title }
           </p>

           <p className="text-dark">
               <strong>Description: </strong> { description }
           </p>
        </div>
    )
}

ProfileExperience.propTypes = {

    experience: PropTypes.array.isRequired

}

export default ProfileExperience;
