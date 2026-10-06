import { create } from "zustand";
import type { Alert } from "../types/alert";

interface AlertsState {
    alerts: Alert[];
    addAlert: (newAlert: Alert) => void;
    setAlerts: (alerts: Alert[]) => void;
    deleteAlert: (id: string) => void;
}

export default create<AlertsState>()((set) => ({
    alerts: [],
    addAlert: (newAlert) =>
        set((state) => ({ alerts: [...state.alerts, newAlert] })),
    setAlerts: (alerts) => set({ alerts: alerts }),
    deleteAlert: (id) =>
        set((state) => ({ alerts: state.alerts.filter((a) => a._id !== id) })),
}));
