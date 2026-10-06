import type { Alert } from "../types/alert";

export default (alerts: Alert[]) => {
    if (alerts.length < 3) return false;
    const lastAlertDate = alerts[0].createdAt;
    if (!lastAlertDate) return false;
    const start = new Date(Number(lastAlertDate) - 1000 * 60);
    const criticalTimeAlerts = alerts.filter(
        (alert) =>
            alert.createdAt! > start &&
            alert.createdAt! < lastAlertDate &&
            alert.priority === "Critical",
    );
    if (criticalTimeAlerts.length < 3) return false;
    let centerIn = false;
    let northIn = false;
    let southIn = false;

    alerts.forEach((alert) => {
        if (alert.arena === "Center") centerIn = true;
        if (alert.arena === "North") northIn = true;
        if (alert.arena === "South") southIn = true;
    });

    return centerIn && northIn && southIn;
};
