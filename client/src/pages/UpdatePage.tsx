import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Priority, Arena, Status, Alert } from "../types/alert";
import useAlerts from "../hooks/useAlerts";
import useAlertsStore from "../store/useAlertsStore";

function UpdatePage() {
    const { id } = useParams();
    const alert = useAlertsStore().alerts.find((a) => a._id === id);
    // const [alert, setAlert] = useState<Alert>({
    //     displayName: alert.displayName,
    //     description: originalAlert.description,
    //     priority: originalAlert.priority,
    //     arena: originalAlert.arena,
    //     status: originalAlert.status,
    //     lat: originalAlert.lat,
    //     lon: originalAlert.lon,
    // });
    const [displayName, setDisplayName] = useState(alert!.displayName);
    const [description, setDescription] = useState(alert!.description);
    const [priority, setPriority] = useState<Priority>(alert!.priority);
    const [arena, setArena] = useState<Arena>(alert!.arena);
    const [status, setStatus] = useState<Status>(alert!.status);
    const [lat, setLat] = useState(alert!.lat);
    const [lon, setLon] = useState(alert!.lon);
    const navigate = useNavigate();
    const { error, isLoading, update } = useAlerts();

    return (
        <>
            <button onClick={() => navigate("/home")}>Back to Home</button>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    update(id!, {
                        displayName,
                        description,
                        priority,
                        arena,
                        status,
                        lat,
                        lon,
                    });
                }}
            >
                <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="display name"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description"
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

                <select
                    name="status"
                    onChange={(e) => setStatus(e.target.value as Status)}
                >
                    <option value="">--Please choose status--</option>
                    <option value="Active">Active</option>
                    <option value="Handled">Handled</option>
                </select>

                <input
                    type="number"
                    step={0.0001}
                    value={lat}
                    onChange={(e) => setLat(Number(e.target.value))}
                    placeholder="lat"
                />
                <input
                    type="number"
                    step={0.0001}
                    value={lon}
                    onChange={(e) => setLon(Number(e.target.value))}
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
