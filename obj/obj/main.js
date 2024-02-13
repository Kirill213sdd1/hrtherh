// function makeUser (name, age) {
//     return {name,age}
// }

// let obj = makeUser('name1', 15)
// let obj2 = {
//     '1': 'one',
//     '2': 'two',
//     '10': 'ten',
//     '4': 'four'
// }

// let permissions = {
//     'is_admin': true
// }

// let admin = Object.assign({}, user, permissions)
// admin.name = 'admin'

// let manager = {}
// for (let i in user) {
//     manager[i] = user [i]
// }
// manager.name = 'manager'

// console.log(admin);
// console.log(manager);

// let user = {
//     name: 'name1',
//     password: 'A-a12345',
//     login: 'User1',

//     hello_user () {
//         console.log(`Hello ${this.name}`);
//     },

//     say_hi () {
//         const arrow = ()=> {
//             console.log(`hello again ${this.name}`);
//         }
//         arrow()
//     },

// }

// function goodbye_user (name) {
//     console.log(`Goodbye ${this.name}`);
// }
// user.bye = goodbye_user

// user.hello_user()
// user.bye()
// user.say_hi()

// function User (name) {
//     this.name = name,
//     this.is_admin = false
// }

// let user1 = new User('Name1')
// console.log(user1);

// let user = {
//     fio: {
//        name: 'Vasia',
//        surname: 'Petrov'
//     },
//     age: 15,
// }
// // console.log(user?.fio?.name);
// let userAdmin = {
//     admin(){
//         console.log('i am admin');
//     }
// }
// let user1 = {}
// userAdmin.admin()
// user1.admin?.()

// let arrow = []
// let fruits = ['apple', 'orange', 'pear', 'banana']
// fruits[fruits.length] = 'Апельсин'
// fruits[fruits.length] = 'asdasd'

// console.log(fruits.push('ananas'));
// console.log(fruits.pop);
// console.log(fruits.unshift('Яблоко'));
// console.log(fruits.pop);
// console.log(fruits);

// for (let i in fruits) {
//     console.log(i, fruits[i]);
// }

// for (let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let arr = [
//     [1,2,3],
//     [4,5,6], 
//     [7,8,9],
// ] 
// let a = []
// console.log(arr[0][1]);

// for (i in arr) {
//     if (arr[i] !== a[i]) {
//         console.log('No');
//         break
//     } else {
//         console.log('yes');
//     }
// }

// delete arr[1]
// let f = arr.splice(1,2,'qweqewd','qwerqqwe')
// console.log(arr.slice(1));
// let arr = [1,2,3,6,4,5]
// for (let i in arr) {
//     console.log(i);
// }
// function fun (item, index) {
//     console.log(index, item*2);
// }
// arr.forEach((item, index) => fun(item, index))

// let arr2 = arr.map(item => {
//     console.log(item*5) 
// })
// console.log(arr.sort());
// let result = arr.reduce((sum, current) => sum + current, 0)
// console.log(result);

