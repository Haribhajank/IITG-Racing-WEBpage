import React from "react";



export default function Welcome () {
    return(
        <div className="mt-32">
            <div className="relative flex items-center justify-center overflow-hidden">
                <img className="max-w-full max-h-full" src={require('../assets/images/welcome.png')}></img>
                
                <div className="group">
                    <img className="absolute left-0 top-1/2 transform -translate-y-1/2 w-auto h-auto" src={require('../assets/images/Rectangle 139.png')}></img>
                    <div className="absolute inset-0 bg-white opacity-5 transform -skew-y-80 "
                    style={{ clipPath: 'polygon(0 0, 55% 0, 45% 95%, 0% 95%)' }}>
                    </div>
                    <div className="absolute top-32 left-40 pr-72 w-3/4" >
                    <p className="text-white text-6xl font-Racing">Welcome to <br></br> Team <span className="text-red-500">IITG Racing</span></p>
                    <p className="pr-48 text-white mr-44 mt-4">At the College Automobile Club, we are driven by a shared passion for automobiles and a commitment to providing exceptional experiences for our members. We invite you to join us in our fundraising efforts to help us accelerate towards success!</p>
                    </div>
                </div>

                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 group">
                <img
                    src={require("../assets/images/Rectangle 144 (1).png")}
                    alt="Right Image"
                    className="w-3/4 h-3/4 right-0 translate-x-44"
                />
                <img
                    src={require("../assets/images/Rectangle 138 (1).png")}
                    alt="Above Right Image"
                    className="w-max h-max absolute -top-1 right-0 transform translate-x-2 transition-transform transform-gpu transform group-hover:scale-110 hover:scale-100 grayscale group-hover:grayscale-0"
                />
            </div>
            </div>
            
        </div>
    )
};
