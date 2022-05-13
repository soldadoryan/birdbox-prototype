import React, { createContext, useState } from "react";

const RecordingsContext = createContext([]);

export const RecordingsProvider = ({ children }) => {
    const [recordings, setRecordings] = useState([{
        type: 'example',
        title: 'RECORDING 02 - AUDIO & VIDEO / BIRDBOX',
        description: 'This recording is a simulation to demonstrate how the Birdbox application will work.',
        date: new Date('04/19/2022 04:50'),
    }]);

    return (
        <RecordingsContext.Provider value={{ recordings, setRecordings }}>
            {children}
        </RecordingsContext.Provider>
    )
}

export default RecordingsContext;