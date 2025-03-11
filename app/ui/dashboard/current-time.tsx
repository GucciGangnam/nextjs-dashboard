
import { fetchCurrentTime2 } from "@/app/lib/data"

export default async function CurrentTime() {

const time = await fetchCurrentTime2();
const timeStr =  time?.toLocaleTimeString();

console.log(timeStr)

    return (
        <h1 className="col-span-2"> This componet was rendered at: {timeStr} </h1>
    )
}