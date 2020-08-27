import React from 'react';
import './Course.css';
import Button from 'react-bootstrap/Button';

const Course = (props) => {
const {name,price,instructor,code}=props.dataInfo;

    return (
        <div className="coursestyle">
            <h3>Course Title:-{name}</h3>
             <p>Price:-{price}</p>
             <p>instructor By:-{instructor}</p>
            <p>Course code:-{code}</p>
            <Button onClick={()=>props.handleAddClick(props.dataInfo)} variant="success">Enrolled Now</Button>{' '}
        </div>
    );
};

export default Course;