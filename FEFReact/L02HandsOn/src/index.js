import React from 'react';
import ReactDOM from 'react-dom';
const stateInfo = (
    state1,
    Population1,
    Capital1,
    state2,
    Population2,
    Capital2,
    state3,
    Population3,
    Capital3,
    state4,
    Population4,
    Capital4,
) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Population</th>
                    <th>Capital</th>
                </tr></thead>
            <tbody>
                <tr>
                    <td>{state1}</td>
                    <td>{Population1}</td>
                    <td>{Capital1}</td>
                </tr>
                <tr>
                    <td>{state2}</td>
                    <td>{Population2}</td>
                    <td>{Capital2}</td>
                </tr>
                <tr>
                    <td>{state3}</td>
                    <td>{Population3}</td>
                    <td>{Capital3}</td>
                </tr>
                <tr>
                    <td>{state4}</td>
                    <td>{Population4}</td>
                    <td>{Capital4}</td>
                </tr>
            </tbody>
        </table>
    );
};
ReactDOM.render(
    stateInfo(
        'Idaho',
        '',
        'Boiso',
        'Tennessee',
        '6.651 million',
        'Nashville',
        'Maine',
        '1.331 million',
        'Agusta',
        'Wisconsin',
        '5.779 million',
        'Madison'
    ),
    document.getElementById('root')
);