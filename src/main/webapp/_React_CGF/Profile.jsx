const Profile = () => {
    const [userData, setUserData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        ajax_alt("webUser/getProfile",
            function (obj) {
                if (obj.errorMsg.length > 0) {
                    setError(obj.errorMsg);
                    setUserData(null);
                } else {
                    setUserData(obj);
                    setError(null);
                }
            },
            function (msg) {
                setError(msg);
                setUserData(null);
            }
        );
    }, []);

    return (
        <div>
            {error && <div style={{ color: "red", textAlign: "center", paddingTop: "2rem" }}>{error}</div>}
            {userData && <ProfileView user={userData} heading="Profile for" />}
        </div>
    );
};