import { useState } from "react";
import api from "../config/api";
import useAlertsStore from "../store/useAlertsStore";
import type { AxiosError } from "axios";

interface AlertFields {
    displayName: string;
    description: string;
    priority: "Low" | "Medium" | "High" | "Critical";
    arena: "North" | "South" | "Center";
    status: "Active" | "Handled";
    lon: number;
    lat: number;
}

interface serverError {
    message: string;
}

function useAlerts() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState(false);
    const addAlert = useAlertsStore((state) => state.addAlert);
    const setAlerts = useAlertsStore((state) => state.setAlerts);
    const deleteAlert = useAlertsStore((state) => state.deleteAlert);

    const catchError = (err: AxiosError<serverError>) => {
        const serverMsg = err.response?.data?.message;
        setError(typeof serverMsg === "string" ? serverMsg : "server error");
    };

    const create = (alertFields: AlertFields) => {
        setLoading(true);
        api.post("/api/alerts", { alert: alertFields })
            .then((res) => addAlert(res.data.alert))
            .catch(catchError)
            .finally(() => setLoading(false));
    };

    const get = () => {
        setLoading(true);
        api.get(`/api/alerts`)
            .then((res) => setAlerts(res.data.alerts))
            .catch(catchError)
            .finally(() => setLoading(false));
    };

    const remove = (id: string) => {
        setLoading(true);
        api.delete(`/api/alerts/${id}`)
            .then(() => deleteAlert(id))
            .catch(catchError)
            .finally(() => setLoading(false));
    };

    const update = (id: string, updates: any) => {
        setLoading(true);
        api.put(`/api/alerts/${id}`, { updates })
            .then((res) => {
                deleteAlert(id);
                addAlert(res.data.alerts);
            })
            .catch(catchError)
            .finally(() => setLoading(false));
    };
    return { error, isLoading, create, get, remove, update };
}

export default useAlerts;
