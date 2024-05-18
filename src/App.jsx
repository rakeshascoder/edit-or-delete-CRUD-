import React, { useState } from 'react'

const App = () => {
    let [name, setname] = useState("")
    let [data, setdata] = useState([])


    let deletedata = function (index) {
        let newdata = [...data]
        newdata.splice(index, 1)
        setdata(newdata)
    }
    function submit(event) {
        event.preventDefault()
        let values = {
            person: name
        }
        setdata([...data, values])
        setname("")
    }

    let updatedata = function (index) {
        let newitem1 = { person: prompt("enter detail") }
        let newdata = [...data]
        newdata.splice(index, 1)
        newdata.push(newitem1)
        console.log(newdata)
        setdata(newdata)
    }
    return (
        <div>
            <div>
                <form onSubmit={submit} action="">

                    <input type="text" name="" onChange={(e) => setname(e.target.value)} value={name} id="" />
                    <button type='submit'>delete</button>
                </form>

            </div>
            <div>
                {data.length === 0 ? (<h1>no data</h1>) :
                    <div>
                        {data.map((item, i) => {
                            return <div key={i}>
                                <h1>name:{item.person}</h1>
                                <button onClick={() => deletedata(i)}>delete</button>
                                <button onClick={() => updatedata(i)}>edit data</button>

                            </div>
                        })}

                    </div>
                }
            </div>

        </div>
    )
}

export default App
