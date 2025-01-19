import { useState } from "react"

import Button from "./partials/Button"
import languages from "../data/languages"

const Main = () => {
    const [selectedId, setSelectedId] = useState(2)
    return (
        <>
            <section id="buttons" className="d-flex justify-content-center">
                {languages.map(item => (

                    <Button key={item.id} title={item.title} onSelect={() => setSelectedId(item.id)} />
                ))}
            </section>

            <section id="description" className="d-flex justify-content-center col-5 mx-auto ">
                <div className="alert alert-light">
                    <h4>{languages.find(item => item.id == selectedId).title}</h4>
                    <p>{languages.find(item => item.id == selectedId).description}</p>

                </div>

            </section>
        </>
    )
}

export default Main