import { useNavigate } from "react-router-dom";
import type { Alert } from "../types/alert";

function AlertCard({ alert }: { alert: Alert }) {
    const navigate = useNavigate();
    return (
        <article>
            <h2>{alert.displayName}</h2>
            <h3>{alert.priority}</h3>
            <p>Status: {alert.status}</p>
            <p>arena: {alert.arena}</p>
            <button onClick={() => navigate(`/alert/${alert._id}`)}>
                View Alert
            </button>
        </article>
    );
}

export default AlertCard;
