import React from 'react'
import DataElem from './DataElem'

const Data = () => {
    return (
        <div className='data'>
            <h2>TOKENOMICS</h2>
            <div className="data_body">
                <DataElem color="dark" title='XUI' amount='100%' progressLength={100} />
                <DataElem color="light" title='XUI' amount='10%' progressLength={10} />
                <DataElem color="dark" title='XUI' amount='50%' progressLength={50} />
                <DataElem color="light" title='XUI' amount='10%' progressLength={10} />
                <DataElem color="dark" title='XUI' amount='$150K' progressLength={90} />
            </div>
        </div>
    )
}

export default Data