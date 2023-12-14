"use client"

import React, { useState, useEffect } from 'react';
import '../app/Styles.css';
import Signup from './Signup';
import Personal from './Personal';
import Contact from './Contact';

export type visiboy = "visible" | "hidden";

const MainForm = () => {
    const [step, setStep] = useState(0);
    const [valid, setValid] = useState(false);
    const [nextVal, setNextVal] = useState("Next");
    const [prevDis, setPrevDis] = useState("hidden");
    const [formData, setFormData] = useState({
        uname: "",
        pass: "",
        cpass: "",
        name: "",
        mobile: "",
        email: "",
        addr: "",
        city: "",
        stat: ""
    });

    const ShowStep = () => {
        if(step === 0){
            return(
                <Signup formData={formData} setFormData={setFormData} />
            );
        }else if(step === 1){
            return(
                <Personal formData={formData} setFormData={setFormData} />
            );
        }else if(step === 2){
            return(
                <Contact formData={formData} setFormData={setFormData} />
            );
        }
    }

    useEffect(() => {
        if(step === 0){
            setPrevDis("hidden");
            setNextVal("Next");
            if(formData.uname === "" && formData.pass === "" && formData.cpass === "" ){
                setValid(false);
            }else{
                if(formData.pass === formData.cpass){
                    setValid(true);
                }else{
                    setValid(false);
                }
            }
        }else if(step === 1){
            setPrevDis("visible");
            setNextVal("Next");
            if(formData.name === "" && formData.mobile === "" && formData.email === "" ){
                setValid(false);
            }else{
                setValid(true);
            }
        }else if(step === 2){
            setPrevDis("visible");
            if(formData.addr === "" && formData.city === "" && formData.stat === "" ){
                setValid(false);
            }else{
                setValid(true);
            }
        }
        if(valid){
            setNextVal("Submit");
        }else{
            setNextVal("Next");
        }

    }, [formData, valid, nextVal, prevDis]);

  return (
    <div>
        <div className="progress-bar">
            <div className="progress" style={{ width: step === 0 ? "33.3%" : step === 1 ? "66.6%" : "100%"}}>
            </div>
        </div>

        <div className="container">
            <div>
                {/* <Signup /> */}
                {ShowStep()}
            </div>
            <div className="btn-container">
                <button className="btn" disabled={ step == 0 } 
                onClick={() => 
                    // setStep(step - 1)
                    {
                        if(step === 1){
                            setPrevDis("hidden");
                        }else{
                            setPrevDis("visible");
                        }
                        setStep(step - 1);
                        setNextVal("Next");
                    }
                }
                style={{ visibility: `${prevDis}` as visiboy }}
                >Prev</button>
                <button className="btn" disabled={ step == 2 } onClick={() => 
                    // setStep(step + 1)
                    {
                        if(valid){
                            setStep(step + 1);
                            setValid(false);
                        }
                    }
                }>{nextVal}</button>
            </div>
        </div>
    </div>
  )
}

export default MainForm