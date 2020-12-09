const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, stateColor) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = stateColor;
    notification.className = "notification";
    notifications.appendChild(notification);
}

export const handleNewUser = ({ nickname }) =>
    fireNotification(`${nickname} joined`, "rgb(0, 122, 255)");

export const handleDisconnectUser = ({ nickname }) =>
    fireNotification(`${nickname} left`, "rgb(255, 149, 0)");