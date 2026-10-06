import { useNavigate, useParams } from "react-router-dom";
import useAlertsStore from "../store/useAlertsStore";
import useAlerts from "../hooks/useAlerts";

function AlertPage() {
    const { id } = useParams();
    const allAlerts = useAlertsStore((state) => state.alerts);
    const alert = allAlerts.find((a) => a._id === id);
    const { error, isLoading, remove } = useAlerts();
    const navigate = useNavigate();
    const onUpdate = () => {
        navigate(`/alert/update/${id}`);
    };
    const onDelete = () => {
        remove(id);
        navigate("/home");
    };

    return (
        <>
            {alert && (
                <section>
                    <button onClick={() => navigate("/home")}>
                        Back to Home
                    </button>
                    <h1>Alert Display: {alert.displayName}</h1>
                    <h2>Arena: {alert.arena}</h2>
                    <p>{alert.description}</p>
                    <p>Priority: {alert.priority}</p>
                    <p>Status: {alert.status}</p>
                    <p>Lon: {alert.lon}</p>
                    <p>Lat: {alert.lat}</p>
                    <p>ID: {alert._id}</p>
                    <button onClick={onUpdate}>Update Alert</button>
                    <button onClick={onDelete}>Delete Alert</button>
                    {error && <p>{error}</p>}
                    {isLoading && <p>Loading...</p>}
                </section>
            )}
            {!alert && <h2>Alert {id} not found</h2>}
        </>
    );
}

export default AlertPage;
