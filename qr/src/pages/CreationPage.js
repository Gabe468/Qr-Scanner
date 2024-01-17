import React from 'react'
import { useState } from 'react';
import Select from 'react-select'

function CreationPage() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [qrData, setQrData] = useState({
        InvoiceNum: "",
        Worker: "",
        User: "",
        UserId: "",
        Location: "",
        Description: "",
        SN: ""

    });

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ];

    const handleChange = (event) => {
        setQrData({
            ...qrData,
            [event.target.name]: event.target.value
        })
    };

    const optionsHandleChange = (value, action) => {
        let optionArray = [];
        for(let i = 0; i < value.length; i++) {
            let obj = value[i];
            optionArray.push(obj.value);
        }
        setQrData({
            [action.name]: optionArray
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(qrData);
    };
  return (
    <div className="body">
        <form onSubmit={handleSubmit}>
            <label className="text">Enter invoice number:
                <input
                    className="qrinput"
                    type="text"
                    name="InvoiceNum"
                    value={qrData.InvoiceNum}
                    onChange={handleChange}
                />
            </label>
            <label className="text">Select workers name:
                <Select
                    isMulti
                    className="qroption"
                    type="text"
                    name="Worker"
                    defaultValue={selectedOption}
                    onChange={optionsHandleChange}
                    options={options}
                />
            </label>
            <label className="text">Enter VIN:
                <input
                    className="qrinput"
                    type="text"
                    name="User"
                    value={qrData.User}
                    onChange={handleChange}
                />
            </label>
            <label className="text">Enter :
                <input
                    className="qrinput"
                    type="text"
                    name="UserId"
                    value={qrData.UserId}
                    onChange={handleChange}
                />
            </label>
            <input className="button-22" type="submit" />
        </form>
    </div>
  )
}

export default CreationPage