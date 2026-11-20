"use strict";

const ExoticFishInsertOrUpdate = (props) => {

    var action = "insert";
    var id = "";

    var url = window.location.hash;

    console.log("url that invoked ExoticFishInsertOrUpdate is " + url);

    if (url.search(":") > -1) {
        const url_list = url.split(":");
        id = url_list[url_list.length - 1];
        console.log("to update id " + id);
        action = "update";
    } else {
        console.log("to insert");
    }

    const [fishData, setFishData] = React.useState(
        {
            "exotic_fish_id": "",
            "fishspecies_name": "",
            "image": "",
            "species_population": "",
            "depth_found": "",
            "habitat": "",
            "interesting_fact": "",
            "web_user_id": "",
            "errorMsg": ""
        }
    );

    const [userList, setUserList] = React.useState([]);

    const [errorObj, setErrorObj] = React.useState(
        {
            "exotic_fish_id": "",
            "fishspecies_name": "",
            "image": "",
            "species_population": "",
            "depth_found": "",
            "habitat": "",
            "interesting_fact": "",
            "web_user_id": "",
            "errorMsg": ""
        }
    );

    const [isLoading, setIsLoading] = React.useState(true);

    const encodeUserInput = () => {
        var userInputObj = {
            "exotic_fish_id": fishData.exotic_fish_id,
            "fishspecies_name": fishData.fishspecies_name,
            "image": fishData.image,
            "species_population": fishData.species_population,
            "depth_found": fishData.depth_found,
            "habitat": fishData.habitat,
            "interesting_fact": fishData.interesting_fact,
            "web_user_id": fishData.web_user_id
        };
        return encodeURIComponent(JSON.stringify(userInputObj));
    };

    const setProp = (obj, propName, propValue) => {
        var o = Object.assign({}, obj);
        o[propName] = propValue;
        return o;
    };

    React.useEffect(
        () => {
            console.log("AJAX call for web user list");
            ajax_alt("webUser/getAll",
                function (obj) {
                    console.log("webUser/getAll Ajax success");
                    if (obj.dbError && obj.dbError.length > 0) {
                        setErrorObj(setProp(errorObj, "web_user_id", obj.dbError));
                    } else {
                        obj.webUserList.sort(function (a, b) {
                            if (a.userEmail > b.userEmail) {
                                return 1
                            } else {
                                return -1;
                            }
                        });
                        setUserList(obj.webUserList);
                        
                        if (obj.webUserList.length > 0) {
                            setFishData(setProp(fishData, "web_user_id", obj.webUserList[0].webUserId));
                        }

                        if (action === "update") {
                            console.log("Now getting exotic_fish record " + id + " for the update");
                            ajax_alt("exoticFish/getById?id=" + id,
                                function (dbObj) {
                                    if (dbObj.errorMsg.length > 0) {
                                        setErrorObj(setProp(errorObj, "errorMsg", dbObj.errorMsg));
                                    } else {
                                        setFishData(dbObj);
                                    }
                                },
                                function (ajaxErrorMsg) {
                                    setErrorObj(setProp(errorObj, "errorMsg", ajaxErrorMsg));
                                }
                            );
                        }
                    }
                    setIsLoading(false);
                },
                function (ajaxErrorMsg) {
                    setErrorObj(setProp(errorObj, "errorMsg", ajaxErrorMsg));
                    setIsLoading(false);
                }
            );
        }, []);

    const validate = () => {
        setIsLoading(true);
        ajax_alt("exoticFish/" + action + "?jsonData=" + encodeUserInput(),
            function (obj) {
                if (obj.errorMsg.length === 0) {
                    obj.errorMsg = "Record Saved !";
                }
                setErrorObj(obj);
                setIsLoading(false);
            },
            function (ajaxErrorMsg) {
                setErrorObj(setProp(errorObj, "errorMsg", ajaxErrorMsg));
                setIsLoading(false);
            }
        );
    };

    if (isLoading) {
        return <div> ... Loading ... </div>;
    }

    return (
        <table className="insertArea">
            <h1>Exotic Fish</h1>
            <tbody>
                <tr>
                    <td>Fish ID</td>
                    <td><input value={fishData.exotic_fish_id} disabled /></td>
                    <td className="error">{errorObj.exotic_fish_id}</td>
                </tr>
                <tr>
                    <td>Species Name</td>
                    <td><input value={fishData.fishspecies_name} onChange={e => setFishData(setProp(fishData, "fishspecies_name", e.target.value))} /></td>
                    <td className="error">{errorObj.fishspecies_name}</td>
                </tr>
                <tr>
                    <td>Image URL</td>
                    <td><input value={fishData.image} onChange={e => setFishData(setProp(fishData, "image", e.target.value))} /></td>
                    <td className="error">{errorObj.image}</td>
                </tr>
                <tr>
                    <td>Species Population</td>
                    <td><input value={fishData.species_population} onChange={e => setFishData(setProp(fishData, "species_population", e.target.value))} /></td>
                    <td className="error">{errorObj.species_population}</td>
                </tr>
                <tr>
                    <td>Depth Found</td>
                    <td><input value={fishData.depth_found} onChange={e => setFishData(setProp(fishData, "depth_found", e.target.value))} /></td>
                    <td className="error">{errorObj.depth_found}</td>
                </tr>
                <tr>
                    <td>Habitat</td>
                    <td><input value={fishData.habitat} onChange={e => setFishData(setProp(fishData, "habitat", e.target.value))} /></td>
                    <td className="error">{errorObj.habitat}</td>
                </tr>
                <tr>
                    <td>Interesting Fact</td>
                    <td><input value={fishData.interesting_fact} onChange={e => setFishData(setProp(fishData, "interesting_fact", e.target.value))} /></td>
                    <td className="error">{errorObj.interesting_fact}</td>
                </tr>
                <tr>
                    <td>Web User (Owner)</td>
                    <td>
                        <select onChange={e => setFishData(setProp(fishData, "web_user_id", e.target.value))} value={fishData.web_user_id}>
                            {
                                userList.map(user =>
                                    <option key={user.webUserId} value={user.webUserId} >
                                        {user.userEmail}
                                    </option>
                                )
                            }
                        </select>
                    </td>
                    <td className="error">{errorObj.web_user_id}</td>
                </tr>
                <tr>
                    <td>
                        <br />
                        <button type="button" onClick={validate}>Save</button>
                    </td>
                    <td className="error" colSpan="2">
                        <br />
                        {errorObj.errorMsg}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

// EXPOSE TO WINDOW SO INDEX.HTML CAN SEE IT
window.ExoticFishInsertOrUpdate = ExoticFishInsertOrUpdate;