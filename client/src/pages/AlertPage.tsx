import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAlertsStore from "../store/useAlertsStore";

function AlertPage() {
    const { id } = useParams();
    const allAlerts = useAlertsStore((state) => state.alerts);
    const alert = allAlerts.find((a) => a._id === id);
    useEffect(() => console.log(allAlerts))

    return (
        <>
            <h1>alert display: {alert?.displayName}</h1>
            <h2>arena: {alert?.arena}</h2>
            <p>{alert?.description}</p>
            <p>priority: {alert?.priority}</p>
            <p>status: {alert?.status}</p>
            <p>lon: {alert?.lon}</p>
            <p>lat: {alert?.lat}</p>
            <p>{alert?._id}</p>
        </>
    );
}

export default AlertPage;
