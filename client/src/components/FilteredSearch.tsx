import React from "react";
import type { Alert, Priority, Arena } from "../types/alert";
import type { SearchState } from "../pages/HomePage";

interface SearchProps {
    search: SearchState;
    setSearch: React.Dispatch<React.SetStateAction<SearchState>>;
    alerts: Alert[];
    setFilteredAlerts: React.Dispatch<React.SetStateAction<Alert[]>>;
}

function FilteredSearch({
    search,
    setSearch,
    alerts,
    setFilteredAlerts,
}: SearchProps) {
    return (
        <>
            <input
                type="text"
                value={search.name}
                onChange={(e) => setSearch({ ...search, name: e.target.value })}
                placeholder="name"
            />

            <select
                name="priority"
                onChange={(e) =>
                    setSearch({
                        ...search,
                        priority: e.target.value as Priority,
                    })
                }
            >
                <option value="">--Please choose priority--</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
            </select>

            <select
                name="arena"
                onChange={(e) =>
                    setSearch({
                        ...search,
                        arena: e.target.value as Arena,
                    })
                }
            >
                <option value="">--Please choose arena--</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="Center">Center</option>
            </select>

            <button
                onClick={() => {
                    let filtered = alerts;
                    if (search.name) {
                        filtered = filtered.filter((alert) =>
                            alert.displayName.startsWith(search.name),
                        );
                    }

                    if (search.priority) {
                        filtered = filtered.filter(
                            (alert) => alert.priority === search.priority,
                        );
                    }
                    if (search.arena) {
                        filtered = filtered.filter(
                            (alert) => alert.arena === search.arena,
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
