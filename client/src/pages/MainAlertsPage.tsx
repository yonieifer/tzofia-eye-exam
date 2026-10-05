import useAlertsStore from "../store/useAlertsStore";
import AlertCard from "../components/AlertCard";

function MainAlertsPage() {
    const alerts = useAlertsStore((state) => state.alerts);
    return (
        <>
            <ul>
                {alerts.map((alert) => (
                    <AlertCard alert={alert} key={alert.id} />
                ))}
            </ul>
        </>
    );
}

export default MainAlertsPage;
