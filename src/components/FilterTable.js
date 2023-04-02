import React from 'react';
import { useState, useEffect } from 'react';
import { withData } from '../hoc/withData';
import './Table.css';
import { v4 as uuidv4 } from 'uuid';


const FilterTable = ({ dataObj, modelArrAll, regionArrAll }) => {
    const [regionVal, setRegionVal] = useState('All');
    const [modelVal, setModelVal] = useState('All');
    const [modelArr, setModelArr] = useState(modelArrAll);

    useEffect(() => {
        setModelArr(regionVal === 'All' ? modelArrAll : Object.keys(dataObj[regionVal]));
    }, [dataObj, regionVal])

    const handleRegionChange = (e) => {
        e.preventDefault();
        setRegionVal(e.target.value);
    }

    const handelModelChange = (e) => {
        e.preventDefault();
        setModelVal(e.target.value);
    }

    const rowsRender = () => {
        const regions = regionVal === 'All' ? regionArrAll : [regionVal];
        const rows = [];
        for (const region of regions) {
            const models = modelVal === 'All' ? Object.keys(dataObj[region]) : [modelVal];
            for (const model of models) {
                if (dataObj[region][model]){
                    rows.push(
                        <tr key={uuidv4()}>
                            <td>{region}</td>
                            <td>{model}</td>
                            <td>{dataObj[region][model]}</td>
                        </tr>
                    )
                }
            }
        }

        return rows;
    }
    
    return (
        <div className='table2'>
            <label htmlFor="region">Region Filter</label>
            <select name='region' value={regionVal} onChange={handleRegionChange}>
                <option value="All">All</option>
                {regionArrAll.map((region) => (
                    <option value={region} key={region}>{region}</option>
                ))}
            </select>

            <label htmlFor="model">Model Filter</label>
            <select name='model' value={modelVal} onChange={handelModelChange}>
                <option value="All">All</option>
                {modelArr.map((model) => (
                    <option value={model} key={model}>{model}</option>
                ))}
            </select>

            <table>
                <tbody>
                    <tr>
                        <th>Region</th>
                        <th>Model</th>
                        <th>Sales</th>
                    </tr>
                    {rowsRender()}
                </tbody>
            </table>
        </div>
    );
};

export const FilterTableWithData = withData(FilterTable);