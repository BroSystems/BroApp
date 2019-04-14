const auth = async (username, password) => {
    return new Promise((resolve, reject) => {
        // check username and password in db
        // get user with username
        const user = {
            username,
            brosList: []
        };
        resolve(user);
    }).catch(error => {
        console.error(`Auth/auth - ${error}`);
        return null;
    });
};

module.exports = {
    auth
}