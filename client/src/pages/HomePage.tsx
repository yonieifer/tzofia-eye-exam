import useAlertsStore from "../store/useAlertsStore";
import AlertCard from "../components/AlertCard";
import { useEffect, useState } from "react";
import type { Alert, Priority, Arena } from "../types/alert";
import FilteredSearch from "../components/FilteredSearch";
import AlertsMap, { type MapAlert } from "../components/AlertsMap";
import useAlerts from "../hooks/useAlerts";

function MainAlertsPage() {
    const alerts = useAlertsStore((state) => state.alerts);
    const [filteredAlerts, setFilteredAlerts] = useState<Alert[]>(alerts);
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState<"" | Priority>("");
    const [arena, setArena] = useState<"" | Arena>("");
    const [view, setView] = useState<"map" | "list">("list");
    const { error, isLoading, get } = useAlerts();

    useEffect(() => {
        get(setFilteredAlerts);
    }, []);

    return (
        <>
            <button
                onClick={() => {
                    setView(view === "list" ? "map" : "list");
                }}
            >
                {view === "list" ? "Map " : "List"}
            </button>
            <FilteredSearch
                search={search}
                setSearch={setSearch}
                alerts={alerts}
                setFilteredAlerts={setFilteredAlerts}
                priority={priority}
                setPriority={setPriority}
                arena={arena}
                setArena={setArena}
            />
            {view === "list" && (
                <ul>
                    {error && <h2>{error}</h2>}
                    {isLoading && <h2>Loading...</h2>}
                    {filteredAlerts.map((alert) => (
                        <AlertCard alert={alert} key={alert._id} />
                    ))}
                </ul>
            )}
            {view === "map" && (
                <AlertsMap alerts={filteredAlerts as MapAlert[]} />
            )}
        </>
    );
}

export default MainAlertsPage;
