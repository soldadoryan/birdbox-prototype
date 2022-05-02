import React, { createContext, useState } from "react";

const RecordingsContext = createContext([]);

export const RecordingsProvider = ({ children }) => {
    const [recordings, setRecordings] = useState([{
        title: 'ATTENTION: THE SITUATION IN THIS RECORDING IS A SIMULATION, BEING USED AS AN EXAMPLE TO PRESENT THE USE OF THE BIRDBOX APPLICATION.',
        date: new Date('04/19/2022 04:50'),
    }]);

    return (
        <RecordingsContext.Provider value={{ recordings, setRecordings }}>
            {children}
        </RecordingsContext.Provider>
    )
}

export default RecordingsContext;