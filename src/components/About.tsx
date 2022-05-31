import React from "react"
import AboutItem from "./AboutItem";

const About: React.FC = () => {
    return (
        <div className="bg-black text-white">
            <div className="max-w-5xl mx-auto flex flex-col justify-center py-52">
                <AboutItem first>
                    Nulla laborum esse do laboris exercitation et consectetur dolore enim aliqua deserunt.
                </AboutItem>
                <AboutItem>
                    Nulla laborum esse do laboris exercitation et consectetur dolore enim aliqua deserunt.
                </AboutItem>
                <AboutItem last>
                    Nulla laborum esse do laboris exercitation et consectetur dolore enim aliqua deserunt.
                </AboutItem>
            </div>
        </div>
    )
};

export default About;
