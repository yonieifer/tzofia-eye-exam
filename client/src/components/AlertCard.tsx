import type { Alert } from "../types/alert";

function AlertCard({ alert }: { alert: Alert }) {
    return (
        <article>
            <h2>{alert.displayName}</h2>
            <h3>{alert.priority}</h3>
            <p>Status: {alert.status}</p>
            <p>arena: {alert.arena}</p>
            <button>View Alert</button>
        </article>
    );
}

export default AlertCard;
