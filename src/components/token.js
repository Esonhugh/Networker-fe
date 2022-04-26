export function GetUsername(){
    let token = localStorage.getItem('Token');
    let defaultUsername = "Guest";
    let jwtObj = {};
    if (token !== null) {
        try{
            jwtObj = JSON.parse(atob(token.split(".")[1]));
            defaultUsername = jwtObj.Username;
        } catch (e) {

        }
    }
    return defaultUsername
}

export function GetJWTObj(){
    let token = localStorage.getItem('Token');
    let jwtObj = null
    if (token !== null) {
        try {
            jwtObj = JSON.parse(atob(token.split(".")[1]));
        } catch (e) {

        }
    }
    return jwtObj
}

export function DeleteToken(){
    localStorage.removeItem('Token');
}