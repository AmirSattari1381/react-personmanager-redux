import { clearPerson } from "./person";

export const addPerson = (fullname) => {
    // fullname مقدار اون input هست که در state , person قرار دارد
    return async (dispatch, getState) => {
        const persons = [...getState().persons];
        const person = {
            id: Math.floor(Math.random() * 100000),
            fullname, // الان اون state رشته رو به عنوان ورودی گرفت
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            await dispatch({ type: "ADD_PERSON", payload: persons });
            await dispatch(clearPerson());
        }
    };
};

export const deletePerson = (personId) => {
    return async (dispatch, getState) => {
        const persons = [...getState().persons];
        const filteredPersons = persons.filter((p) => p.id !== personId);
        await dispatch({ type: "DELETE_PERSON", payload: filteredPersons });
    };
};

export const updatePerson = (event, personId) => {
    return async (dispatch, getState) => {
        const allPersons = [...getState().persons];

        const personIndex = allPersons.findIndex((p) => p.id === personId);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        await dispatch({ type: "UPDATE_PERSON", payload: persons });
    };
};
