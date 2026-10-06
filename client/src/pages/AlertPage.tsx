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
                    <h1>alert display: {alert.displayName}</h1>
                    <h2>arena: {alert.arena}</h2>
                    <p>{alert.description}</p>
                    <p>priority: {alert.priority}</p>
                    <p>status: {alert.status}</p>
                    <p>lon: {alert.lon}</p>
                    <p>lat: {alert.lat}</p>
                    <p>id: {alert._id}</p>
                    <button onClick={onUpdate}>Update Alert</button>
                    <button onClick={onDelete}>Delete Alert</button>
                    {error && <p>{error}</p>}
                    {isLoading && <p>Loading...</p>}
                </section>
            )}
            {!alert && <h2>alert {id} not found</h2>}
        </>
    );
}

export default AlertPage;
