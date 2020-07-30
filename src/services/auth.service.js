import axios from 'axios';

const API_URL = 'http://51.91.157.93:8080/api/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            phone: user.phone,
            country: user.country,
            birthdate: user.birthdate,
            company: user.company,
            IPAdress: user.IPAdress,
            MACAdress: user.MACAdress,
            state: user.state,
            status: user.status,
            roles: user.roles
        });

    }
}

export default new AuthService();