import React from 'react';
import { withData } from '../hoc/withData';
import './Table.css';

const Table = (props) => {
    const { dataObj } = props;

    return (
        <div>
            <table className='table1'>
                <tbody>
                    <tr>
                        <th>Region</th>
                        <th>Model</th>
                        <th>Sales</th>
                    </tr>
                    {Object.keys(dataObj).map((region) => {
                        return (
                            <React.Fragment key={region}>
                                <tr>
                                    <td>{region}</td>
                                    <td>sum</td>
                                    <td>{Object.values(dataObj[region]).reduce((acc, cur) => acc + cur, 0)}</td>

                                </tr>
                                {Object.keys(dataObj[region]).map((key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{region}</td>
                                            <td>{key}</td>
                                            <td>{dataObj[region][key]}</td>
                                        </tr>
                                    )
                                })}
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export const TableWithData = withData(Table);