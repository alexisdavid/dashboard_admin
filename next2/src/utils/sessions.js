export const verifySession = () => {
    const data = sessionStorage.getItem("token");
    if (data) {
        return true;
    } else {
        return false;
    }
}; 