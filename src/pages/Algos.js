import React from 'react';

const Algos = (props) => {
    return (
        <table className="w-96 border-separate table-auto" cellSpacing="12">
            <thead>
                <tr>
                    <th></th>
                    <th className="pl-2 text-gray-400 text-xl" align="left">{props.algorithm.algorithm}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.algorithm.catogries.map((item, index) => {
                        return <tr>
                            <th className="pr-3 border-r-2 border-gray-600 text-gray-400 text-lg align-top" align="right">{item.name}</th>
                            <td className="pl-2 text-gray-300" align="left">{item.description}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Algos;