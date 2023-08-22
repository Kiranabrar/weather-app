import React from 'react'

export default function Footer() {
    return (
        <div>
           
            <footer className="fixed-bottom sticky-bottom text-center text-white" style={{ backgroundColor: 'rgba(233, 77,33, 0.87)' }}>
               
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    © 2020 Copyright:
                    <div className="text-white">WeatherApp.com</div>
                </div>
            </footer>
        </div>

    )
}

