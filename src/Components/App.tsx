import React from 'react';

function App() {
    const currentSHA = '456c'
    const targetSHA = '789'
    const log = [
        {sha: '123', message: 'first commit'},
        {sha: '456', message: 'second commit'},
        {sha: '456b', message: 'b - second commit'},
        {sha: '456c', message: 'c - second commit'},
        {
        sha: '789',
        message: 'most recent commit'
    }]
    return (
        <main className="App">
            <div><label htmlFor="currentSHA">Current SHA:</label><input id="currentSHA" type="text" disabled
                                                                        value={currentSHA}/></div>
            <div><label htmlFor="targetSHA">Target SHA:</label><input id="targetSHA" type="text"
                                                                      placeholder={targetSHA}/></div>
            <ol style={{display: 'flex', flexDirection: 'column-reverse'}}>
                {log.slice(log.findIndex(entry => entry.sha === currentSHA ) + 1, log.findIndex(entry => entry.sha === targetSHA ) + 1).map(entry => (<li>{entry.message}(#{entry.sha})</li>))}
            </ol>
        </main>
    );
}

export default App;
