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
                <div>
                    <h4>titolo</h4>
                    <p>descrizione</p>

                </div>

            </section>
        </>
    )
}

export default Main