import React from "react";
import "./people.css"

export default function PeopleRole(){

    return(
        <div className="PeopleRole">
            <h1 className="pt-5 text-primary text-xl">People</h1>
            <p></p>
            <div className="grid-cols-2 grid p-2">
                <div className="mx-auto">
                    <h1 className="text-lg">Drug Overdose Prevention Program</h1>
                    <p className="pb-2">Role: Founder & Director</p>
                    <iframe src="https://dailytargum.com/article/2022/04/rutgers-fraternity-pi-kappa-phi-creates-drug-overdose-prevention-program" width="100%" height="300px" frameborder="0"></iframe>
                </div>
                <div className="mx-auto">
                    <h1 className="text-lg">The Journey of Hope - South Team</h1>
                    <p className="pb-2">Role: Crew Chief</p>
                    <iframe src="https://www.wtok.com/2021/07/25/fratenity-stops-meridian-during-cross-country-cycling-journey/" width="100%" height="300px" frameborder="0"></iframe>
                </div>

            </div>
        </div>
    )
}