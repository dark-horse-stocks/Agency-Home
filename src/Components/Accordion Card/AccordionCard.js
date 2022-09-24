import React from "react";
import "./style.css"

export default function AccordionCard({no, type, approx, trial, plan, register}) {
    return (
        <div className="accordion-card">
            <div className="d-flex justify-content-between f-direction">
                <div className="w-35">
                    <h6>{no}</h6>
                    <p>No of Stocks</p>
                </div>
                <div className="w-35">
                    <h6>{type}</h6>
                    <p>Type of Service</p>
                </div>
                <div className="w-35">
                    <h6>{approx}</h6>
                    <p>Approx per stock</p>
                </div>
            </div>
            <div className="d-flex justify-content-between f-direction">
                <div className="w-35">
                    <h6>{trial}</h6>
                    <p>Free Trial</p>
                </div>
                <div className="w-35">
                    <h6>{plan}</h6>
                    <p>No of Plans</p>
                </div>
                <div className="w-35">
                    <h6>{register}</h6>
                    <p>Sebi registered</p>
                </div>
            </div>
        </div>
    );
}
