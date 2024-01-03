import React from 'react'
import { useState } from 'react';
import QRCode from "react-qr-code";

function CreationPage() {
    const [qrData, setQrData] = useState({
        Ticket: "",
        Assigned: "",
        User: "",
        UserId: "",
        Location: "",
        Description: "",
        SN: ""

    });

    const handleChange = (event) => {
        setQrData({
            ...qrData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(qrData);
    };

    let display = false;
  return (
    <div class="body">
        <form onSubmit={handleSubmit}>
            <label class="text">Enter Ticket Number:
                <input
                    class="qrinput"
                    type="text"
                    name="Ticket"
                    value={qrData.Ticket}
                    onChange={handleChange}
                />
            </label>
            <label class="text">Enter your name:
                <input
                    class="qrinput"
                    type="text"
                    name="Assigned"
                    value={qrData.Assigned}
                    onChange={handleChange}
                />
            </label>
            <label class="text">Enter user's name:
                <input
                    class="qrinput"
                    type="text"
                    name="User"
                    value={qrData.User}
                    onChange={handleChange}
                />
            </label>
            <label class="text">Enter user's ID:
                <input
                    class="qrinput"
                    type="text"
                    name="UserId"
                    value={qrData.UserId}
                    onChange={handleChange}
                />
            </label>
            <label class="text">Enter Location:
                <input
                    class="qrinput"
                    type="text"
                    name="Location"
                    value={qrData.Location}
                    onChange={handleChange}
                />
            </label>
            <label class="text">Enter Description:
                <input
                    class="qrinput"
                    type="text"
                    name="Description"
                    value={qrData.Description}
                    onChange={handleChange}
                />
            </label>
            <label class="text">Enter Serial Number:
                <input
                    class="qrinput"
                    type="text"
                    name="SN"
                    value={qrData.SN}
                    onChange={handleChange}
                />
            </label>
            <input class="button-22" type="submit" />
        </form>
        {display &&
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
            <QRCode
            size={512}
            style={{ height: "auto", maxWidth: "100%", width: "100%", background: 'white', padding: '16px' }}
            viewBox={`0 0 256 256`}
            />
        </div>}
    </div>
  )
}

export default CreationPage