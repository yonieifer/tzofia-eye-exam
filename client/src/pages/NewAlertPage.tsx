import { useState } from "react";
import useAlerts from "../hooks/useAlerts";
import type { Arena, Priority, Status } from "../types/alert";

function NewAlertPage() {
    const [displayName, setDisplayName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<Priority>("Low");
    const [arena, setArena] = useState<Arena>("Center");
    const [status, setStatus] = useState<Status>("Active");
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const { error, isLoading, create } = useAlerts();

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    create({
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
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description"
                    required
                />

                <select
                    name="priority"
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    required
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
                    required
                >
                    <option value="">--Please choose arena--</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="Center">Center</option>
                </select>

                <select
                    name="status"
                    onChange={(e) => setStatus(e.target.value as Status)}
                    required
                >
                    <option value="">--Please choose status--</option>
                    <option value="Active">Active</option>
                    <option value="Handled">Handled</option>
                </select>

                <input
                    type="number"
                    step={0.0001}
                    onChange={(e) => setLat(Number(e.target.value))}
                    placeholder="lat"
                    required
                />
                <input
                    type="number"
                    step={0.0001}
                    onChange={(e) => setLon(Number(e.target.value))}
                    placeholder="lon"
                    required
                />
                <button type="submit">Create</button>
                {error && <p>{error}</p>}
                {isLoading && <p>Loading...</p>}
            </form>
        </>
    );
}

export default NewAlertPage;
