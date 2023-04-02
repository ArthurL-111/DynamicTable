import React from 'react';
import { data } from '../data/data';

export const withData = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        state = {
            dataObj: {},
            regionArrAll: [],
            modelArrAll: []
        };
        componentDidMount() {
            const dataObj = data.reduce((acc, item) => {
                if (!acc[item.region]) acc[item.region] = {};    
                acc[item.region][item.model] = item.sales;
                return acc;
            }, {});
            const regionArrAll = Object.keys(dataObj);
            const modelArrAll = [];
            regionArrAll.forEach((key) => {
                Object.keys(dataObj[key]).forEach((model) => {
                    if (!modelArrAll.includes(model)) {
                        modelArrAll.push(model)
                    }
                })
            })
            this.setState({dataObj: dataObj, regionArrAll: regionArrAll, modelArrAll: modelArrAll});
        }

        render() {
            console.log(this.state);
            return (
                <WrappedComponent 
                    dataObj = {this.state.dataObj}
                    modelArrAll = {this.state.modelArrAll}
                    regionArrAll = {this.state.regionArrAll}
                />
            )
        }
    }
}