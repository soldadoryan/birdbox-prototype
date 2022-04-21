import React, { createContext, useState } from "react";

const RecordingsContext = createContext([]);

export const RecordingsProvider = ({ children }) => {
    const [recordings, setRecordings] = useState([]);

    return (
        <RecordingsContext.Provider value={{ recordings, setRecordings }}>
            {children}
        </RecordingsContext.Provider>
    )
}

export default RecordingsContext;