export default class User {
    constructor(firstName, lastName, phone, email, password, country, birthdate, company, IPAdress, MACAdress, state, status, roles) {
        this.firstName = firstName;
        this.lastName = lastName
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.country = country;
        this.birthdate = birthdate;
        this.company = company;
        this.IPAdress = IPAdress;
        this.MACAdress = MACAdress;
        this.state = state;
        this.status = status;
        this.roles = roles;
    }
}