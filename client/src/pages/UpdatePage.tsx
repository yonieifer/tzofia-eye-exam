import { useState } from "react";
import { useParams } from "react-router-dom";
import type { Priority, Arena, Status, Alert } from "../types/alert";
import useAlerts from "../hooks/useAlerts";
import useAlertsStore from "../store/useAlertsStore";

function UpdatePage() {
    const { id } = useParams();
    const originalAlert = useAlertsStore().alerts.find((a) => a._id === id);
    const [alert, setAlert] = useState<Alert>({
        displayName: originalAlert!.displayName,
        description: originalAlert!.description,
        priority: originalAlert!.priority,
        arena: originalAlert!.arena,
        status: originalAlert!.status,
        lat: originalAlert!.lat,
        lon: originalAlert!.lon,
    });
    const { error, isLoading, update } = useAlerts();

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    update(id!, alert);
                }}
            >
                <input
                    type="text"
                    value={alert.displayName}
                    onChange={(e) =>
                        setAlert({ ...alert, displayName: e.target.value })
                    }
                    placeholder="display name"
                />
                <input
                    type="text"
                    value={alert.description}
                    onChange={(e) =>
                        setAlert({ ...alert, description: e.target.value })
                    }
                    placeholder="description"
                />

                <select
                    name="priority"
                    onChange={(e) =>
                        setAlert({
                            ...alert,
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
                        setAlert({ ...alert, arena: e.target.value as Arena })
                    }
                >
                    <option value="">--Please choose arena--</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="Center">Center</option>
                </select>

                <select
                    name="status"
                    onChange={(e) =>
                        setAlert({ ...alert, status: e.target.value as Status })
                    }
                >
                    <option value="">--Please choose status--</option>
                    <option value="Active">Active</option>
                    <option value="Handled">Handled</option>
                </select>

                <input
                    type="number"
                    step={0.0001}
                    value={alert.lat}
                    onChange={(e) =>
                        setAlert({ ...alert, lat: Number(e.target.value) })
                    }
                    placeholder="lat"
                />
                <input
                    type="number"
                    step={0.0001}
                    value={alert.lon}
                    onChange={(e) =>
                        setAlert({ ...alert, lon: Number(e.target.value) })
                    }
                    placeholder="lon"
                />
                <button type="submit">Update</button>
                {error && <p>{error}</p>}
                {isLoading && <p>Loading...</p>}
            </form>
        </>
    );
}

export default UpdatePage;
