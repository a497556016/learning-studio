export default {
  put(key, value) {
    if (null != value && typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
  getString(key) {
    return localStorage.getItem(key);
  },
  getObject(key) {
    const json = this.getString(key);
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  }
};
