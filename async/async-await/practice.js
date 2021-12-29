class UserStorage {
  loginUser(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "seung" && pw === "hwan") ||
          (id === "chicken" && pw === "beer")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "seung") {
          resolve({ name: "seung", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

async function getUserResult() {
  const getUser = await userStorage.loginUser(id, pw);
  const getRole = await userStorage.getRoles(getUser);
  return `Hello ${getRole.name}, you have a ${getRole.role} role`;
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your password");

getUserResult().then(alert).catch(console.log);

// class UserStorage {
//     delay(ms) {
//       return new Promise((resolve) => setTimeout(resolve, ms));
//     }

//     async loginUser(id, password) {
//       await this.delay(2000);
//       if (
//         (id === "seunghwan" && password === "123") ||
//         (id === "coder" && password === "123")
//       ) {
//         return id;
//       } else {
//         throw new Error("not found");
//       }
//     }

//     async getRoles(user) {
//       await this.delay(1000);
//       if (user === "seunghwan") {
//         return { name: "seunghwan", role: "admin" };
//       } else {
//         throw new Error("no access");
//       }
//     }
//   }

//   const userStorage = new UserStorage();
//   const id = prompt("Enter your id");
//   const pwd = prompt("Enter your pwd");

//   userStorage
//     .loginUser(id, pwd)
//     .then((user) => userStorage.getRoles(user))
//     .then((user) => alert(`${user.name}님은 ${user.role}입니다.`))
//     .catch(console.log);
