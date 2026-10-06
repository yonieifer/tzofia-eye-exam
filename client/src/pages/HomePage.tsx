import useAlertsStore from "../store/useAlertsStore";
import AlertCard from "../components/AlertCard";
import { useEffect, useState } from "react";
import type { Alert, Priority, Arena } from "../types/alert";
import FilteredSearch from "../components/FilteredSearch";
import AlertsMap, { type MapAlert } from "../components/AlertsMap";
import useAlerts from "../hooks/useAlerts";
import attackWarning from "../services/attackWarning";

export interface SearchState {
    name: string;
    priority: null | Priority;
    arena: null | Arena;
}

function MainAlertsPage() {
    const alerts = useAlertsStore((state) => state.alerts);
    const [filteredAlerts, setFilteredAlerts] = useState<Alert[]>(alerts);
    const [search, setSearch] = useState<SearchState>({
        name: "",
        priority: null,
        arena: null,
    });

    const [view, setView] = useState<"map" | "list">("list");
    const { error, isLoading, get } = useAlerts();
    const [isAttackAlert, setAttackAlert] = useState(false);

    useEffect(() => {
        get(setFilteredAlerts);
    }, []);

    useEffect(() => {
        const isAttack = attackWarning(alerts);
        setAttackAlert(isAttack);
    }, [alerts]);

    return (
        <>
            <button
                onClick={() => {
                    setView(view === "list" ? "map" : "list");
                }}
            >
                {view === "list" ? "Map " : "List"}
            </button>
            {isAttackAlert && (
                <section>
                    <h1>Multi-front attack alert!</h1>
                </section>
            )}
            <FilteredSearch
                search={search}
                setSearch={setSearch}
                alerts={alerts}
                setFilteredAlerts={setFilteredAlerts}
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
