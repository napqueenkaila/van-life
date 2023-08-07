import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    })

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={currentVan.imageUrl} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    )
}