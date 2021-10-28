import React from 'react'
import './Calc.css'
import { useState } from 'react'

const CalcUI = () => {

    const [calc, setCalc] = useState('')
    const [result, setResult] = useState('')
    const ops = ['/','*','+','-','.']

    // setting value to calc
    const changeHandler = (value) =>{
        if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
            return;
        }
        setCalc(calc + value)
        if (!ops.includes(value)) {
            setResult(eval(calc + value))
        }
    }


    const calculate = () =>{
        setCalc(result)
    }


    const deleteCalc = () =>{
        setCalc('') 
        setResult('')
    }
    
    const deleteNumber = () =>{
        if (calc === '') {
            return;
        }
        const value = calc.slice(0,-1)
        setCalc(value ) 
    }

    return (
        <>
            <h2 className='calc-heading'>Simple React Calculator</h2>
            <div className='container'>
                <div className='result-display'>
                    <span className='result'>{result ? (result): ''}</span>
                    <span className='value px-2'>{calc || 0}</span>
                </div>
                <div className='buttons'>
                    <div className='operators-btn'>
                        <button onClick={()=>{changeHandler('/')}}>/</button>
                        <button onClick={()=>{changeHandler('*')}}>*</button>
                        <button onClick={()=>{changeHandler('-')}}>-</button>
                        <button onClick={()=>{changeHandler('+')}}>+</button>
                        <button onClick={deleteCalc}>CLEAR</button>
                        <button onClick={deleteNumber}>DEL</button>
                    </div>
                    <div className='numbers-btn'>
                        <button onClick={()=>{changeHandler('1')}}>1</button>
                        <button onClick={()=>{changeHandler('2')}}>2</button>
                        <button onClick={()=>{changeHandler('3')}}>3</button>
                        <button onClick={()=>{changeHandler('4')}}>4</button>
                        <button onClick={()=>{changeHandler('5')}}>5</button>
                        <button onClick={()=>{changeHandler('6')}}>6</button>
                        <button onClick={()=>{changeHandler('7')}}>7</button>
                        <button onClick={()=>{changeHandler('8')}}>8</button>
                        <button onClick={()=>{changeHandler('9')}}>9</button>
                        <button onClick={()=>{changeHandler('.')}}>.</button>
                        <button onClick={()=>{changeHandler('0')}}>0</button>
                        <button onClick={calculate}>=</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default CalcUI
