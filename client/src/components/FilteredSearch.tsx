import React from "react";
import type { Alert, Priority, Arena } from "../types/alert";

interface FilteredSearchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    alerts: Alert[];
    setFilteredAlerts: React.Dispatch<React.SetStateAction<Alert[]>>;
    priority: "" | Priority;
    setPriority: React.Dispatch<React.SetStateAction<"" | Priority>>;
    arena: "" | Arena;
    setArena: React.Dispatch<React.SetStateAction<"" | Arena>>;
}

function FilteredSearch({
    search,
    setSearch,
    alerts,
    setFilteredAlerts,
    priority,
    setPriority,
    arena,
    setArena,
}: FilteredSearchProps) {
    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                name="priority"
                onChange={(e) => setPriority(e.target.value as Priority)}
            >
                <option value="">--Please choose priority--</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
            </select>

            <select
                name="arena"
                onChange={(e) => setArena(e.target.value as Arena)}
            >
                <option value="">--Please choose arena--</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="Center">Center</option>
            </select>

            <button
                onClick={() => {
                    let filtered = alerts;
                    if (search) {
                        filtered = filtered.filter((alert) =>
                            alert.displayName.startsWith(search),
                        );
                    }

                    if (priority) {
                        filtered = filtered.filter(
                            (alert) => alert.priority === priority,
                        );
                    }
                    if (arena) {
                        filtered = filtered.filter(
                            (alert) => alert.arena === arena,
                        );
                    }
                    setFilteredAlerts(filtered);
                }}
            >
                Search
            </button>
        </>
    );
}

export default FilteredSearch;
