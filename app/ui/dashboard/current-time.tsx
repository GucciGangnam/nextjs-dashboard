'use client'

import { useEffect, useState } from "react"


export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentTime(new Date());
    }, [])

    return (
        <h1 className="col-span-2"> This componet was rendered at: {currentTime?.toLocaleString()}</h1>
    )
}