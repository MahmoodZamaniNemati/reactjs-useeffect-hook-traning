import { useEffect } from "react";

export const Form = () => {
    useEffect(() => {
        console.log("component mount");
        return () => {
            console.log("component unmount")
        }
    }, [])
    useEffect(() => {
        console.log("component update")
    }, ["text"])
    return (
        <>
            <input type="text" />
        </>
    )
}