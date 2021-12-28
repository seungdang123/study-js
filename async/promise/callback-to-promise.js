// Callback to Promise

class UserStorage {
    loginUser(id, pw) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'seung' && pw === "hwan") ||
                    (id === 'chicken' && pw === "beer")
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }


    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'seung') {
                    resolve({ name: 'seung' , role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your password');

userStorage
    .loginUser(id, pw)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

 