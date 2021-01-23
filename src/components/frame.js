import React, { useState } from 'react'

export default function Frame() {
    const actions = [
        "Email",
        "Call",
        "Meeting",
    ]

    const [items, setItems] = useState([
        {
            day: "58 Days", actions: [{
                type: "Email",
                content: "Renewal Notice One"
            }, {
                type: "Email",
                content: "Renewal Notice One"
            }
            ]
        }, {
            day: "57 Days", actions: [{
                type: "Email",
                content: "Renewal Notice One"
            }]
        }, {
            day: "56 Days", actions: []
        }, {
            day: "55 Days", actions: []
        }
    ])

    return (
        <section>
            <div className="wrapper">
                <div className="frame">
                    <div className="timeline">
                        {items.map((i, k) =>
                            <>
                                <div
                                    key={k}
                                    onDrop={(e) => {
                                        let data = items[k];
                                        data.actions.push({
                                            type: e.dataTransfer.getData("text/plain"),
                                            content: ""
                                        })
                                        items[k] = data;
                                        setItems([...items])
                                        e.target.style.border = "none";

                                    }}
                                    onDragEnter={(e) => {
                                        e.preventDefault();
                                        e.target.style.border = "2px dotted #6F66F1";
                                    }}
                                    onDragLeave={(e) => {
                                        e.preventDefault();
                                        e.target.style.border = "none";
                                    }}
                                    onDragOver={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="time"><div>{i.day}</div><small>{`${i.actions.length} actions`}</small></div>
                                <div className="time-actions-wrapper">
                                    {i.actions.length ? i.actions.map((i, k) => (
                                        <div key={k} className="time-actions"> <div className="type">{i.type}</div>
                                            <select className="content">
                                                <option>Renewal Notice One</option>
                                                <option>Renewal Call Email</option>
                                                <option>Renewal Meeting Email</option>
                                            </select></div>
                                    )) : "There is no action"}
                                </div>
                            </>
                        )}

                    </div>
                </div>
                <div className="actions">
                    {actions.map(i => (
                        <div key={i} onDragStart={e => {
                            e.dataTransfer.setData("text/plain", i);
                        }} draggable className="box">{i}</div>
                    ))}
                </div>
            </div>
        </section >
    )
}
