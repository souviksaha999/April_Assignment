import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export default function Loading() {


    return (
        <>
            <div style={{display : "flex", alignItems : "center", justifyContent : "center"}}>
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

        </>
    )
}
