import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Person from "./Person";
import { deletePerson, updatePerson } from "../../actions/persons";

const Persons = () => {
    const persons = useSelector((state) => state.persons);
    const dispatch = useDispatch();

    return (
        <div>
            {persons.map((person) => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    // deleted={() => deletePerson(person.id)}
                    // changed={event => nameChange(event, person.id)}
                    deleted={() => dispatch(deletePerson(person.id))}
                    changed={(e) => dispatch(updatePerson(e, person.id))}
                />
            ))}
        </div>
    );
};

export default Persons;
