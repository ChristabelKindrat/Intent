var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Створіть клас абстрактний клас "Користувач", який буде мати такі властивості:
//     - firstName
//     - lastName
//     - email
//     - password
//     - role - може бути адміністратор, модератор або звичайний користувач
// Клас повинен мати такі методи:
//     - editProfile - абстрактний метод, який буде редагувати інформацію про користувача.
//     - viewInfo - абстрактний метод, який буде повертати інформацію про користувача.
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["MODERATOR"] = "moderator";
    Role["USER"] = "user";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(fistName, lastName, email, password, role) {
        this.fistName = fistName;
        this.firstName = fistName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(fistName, lastName, email, password, role, accessLevel) {
        var _this = _super.call(this, fistName, lastName, email, password, role) || this;
        _this.accessLevel = accessLevel;
        return _this;
    }
    Admin.prototype.editProfile = function (firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    };
    Admin.prototype.viewInfo = function () {
        return "Admin: ".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.email, " ").concat(this.role);
    };
    Admin.prototype.setAccessLevel = function (accessLevel) {
        this.accessLevel = accessLevel;
    };
    Admin.prototype.getAccessLevel = function () {
        return this.accessLevel;
    };
    return Admin;
}(User));
var Moderator = /** @class */ (function (_super) {
    __extends(Moderator, _super);
    function Moderator(fistName, lastName, email, password, role, numberOfReports) {
        var _this = _super.call(this, fistName, lastName, email, password, role) || this;
        _this.numberOfReports = numberOfReports;
        return _this;
    }
    Moderator.prototype.editProfile = function (firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    };
    Moderator.prototype.viewInfo = function () {
        return "Moderator: ".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.email, " ").concat(this.role);
    };
    Moderator.prototype.setNumberOfReports = function (numberOfReports) {
        this.numberOfReports = numberOfReports;
    };
    Moderator.prototype.getNumberOfReports = function () {
        return this.numberOfReports;
    };
    return Moderator;
}(User));
//Створити об'єкти класів "Адміністратор" та "Модератор" і перевірити роботу методів для кожного з них.
var admin1 = new Admin('Khrystyna', 'Kindrat', 'christabelkril@gmail.com', 'K2309', 'ADMIN', 1);
console.log(admin1.viewInfo());
admin1.editProfile('Ivan', 'Myk', 'ivanmyk20@gmail.com', 'V2012');
console.log(admin1.getAccessLevel());
admin1.setAccessLevel(2);
var moderator1 = new Moderator('Ivan', 'Ostap', 'ivanostap28@gmail.com', 'V2802', 'MODERATOR', 1);
console.log(moderator1.viewInfo());
moderator1.editProfile('Andriy', 'Unknown', 'andriy00@gmail.com');
moderator1.setNumberOfReports(4);
console.log(moderator1.getNumberOfReports());
// Кожна власmивість і метод повинні мати модифікатор доступу(protected, private, public)
// Завдання має бути виконане з використанням TypeScript, все повинне бути типізоване, використовуйте interface, enum, type.
// Добавте коментарі в місцях де використовувався якийсь з основних принципів ООП і чому.
