/* eslint-disable no-undef */

export const authService = {
  async login(name, uid, token) {
    window.sessionStorage.setItem('uid', JSON.stringify(uid));
    window.sessionStorage.setItem('name', JSON.stringify(name));
    this.uid = uid;
    this.name = name;

    window.sessionStorage.setItem('access-token', JSON.stringify(token));
    this.token = token;

    if (this.callback) {
      this.callback(uid);
    }
  },
  getCurrentUser() {
    return this.name;
  },
  getToken() {
    return this.token;
  },
  getAuthData() {
    return {
      uid: this.uid,
      token: this.token,
    };
  },
  logout() {
    delete this.uid;
    delete this.token;

    window.sessionStorage.clear();

    if (this.callback) {
      this.callback(undefined);
    }
  },
  subscribe(callback) {
    this.callback = callback;
    return () => {
      this.callback = undefined;
    };
  },
};
try {
  authService.name = JSON.parse(window.sessionStorage.getItem('name'));
  authService.uid = JSON.parse(window.sessionStorage.getItem('uid'));
  authService.token = JSON.parse(window.sessionStorage.getItem('access-token'));
} catch (e) {
  //
}
