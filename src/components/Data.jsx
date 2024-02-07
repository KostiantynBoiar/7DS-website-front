import React from 'react'
import DataElem from './DataElem'

const Data = () => {
    return (
        <div className='data'>
            <h2>Data</h2>
            <div className="data_body">
                <DataElem color="dark" title='Marketing' amount='20%' progressLength={20} />
                <DataElem color="light" title='Advisory' amount='10%' progressLength={10} />
                <DataElem color="dark" title='Rewards' amount='50%' progressLength={50} />
                <DataElem color="light" title='Development' amount='10%' progressLength={10} />
                <DataElem color="dark" title='Total income' amount='$150K' progressLength={90} />
            </div>
        </div>
    )
}

export default Data