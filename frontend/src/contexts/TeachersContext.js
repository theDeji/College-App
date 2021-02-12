import React, { useState, createContext } from 'react'

export const TeachersContext = createContext();

const TeachersContextProvider = (props) => {

    const [teachers, setTeachers] = useState([
        { staffNo: 'Staff001', firstName: 'Micheal', lastName: 'Oyinye', level: 'Level 7', ClassHeld: 'JSS 1' },
        { staffNo: 'Staff002', firstName: 'Emmanuel', lastName: 'Joseph', level: 'Level 6', ClassHeld: 'JSS 2' },
        { staffNo: 'Staff003', firstName: 'Tunde', lastName: 'Akinola', level: 'Level 7', ClassHeld: 'JSS 3' },
        { staffNo: 'Staff004', firstName: 'Ali', lastName: 'Hakeem', level: 'Level 8', ClassHeld: 'SSS 3' },
        { staffNo: 'Staff005', firstName: 'Sunday', lastName: 'Favour', level: 'Level 9', ClassHeld: 'SSS 2' },
        { staffNo: 'Staff006', firstName: 'Lukman', lastName: 'Abdullah', level: 'Level 10', ClassHeld: '' },
        { staffNo: 'Staff007', firstName: 'Folahan', lastName: 'Hameed', level: 'Level 11', ClassHeld: '' },
        { staffNo: 'Staff008', firstName: 'Ridwan', lastName: 'Adisa', level: 'Level 12', ClassHeld: '' },
        { staffNo: 'Staff009', firstName: 'Monday', lastName: 'Joseph', level: 'Level 8', ClassHeld: 'SSS 1' }
        ]);

    const getTeachers = () => {
        // console.log('call for teachers')
    }

    return(
        <TeachersContext.Provider value={{teachers, setTeachers, getTeachers}} >
            {props.children}
        </TeachersContext.Provider>
    )

}

export default TeachersContextProvider;