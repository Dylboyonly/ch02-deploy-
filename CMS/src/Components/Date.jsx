
export default function NewDate(){

    const date = new Date()
    const dt = date.toDateString()
    return(
        <>
        <div className="text-black" id="texet4">
            {dt}
        </div>
        </>
    )
}