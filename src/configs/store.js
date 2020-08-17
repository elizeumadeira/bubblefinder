const LOCAL_STORAGE_KEY = '__buublefinder__';

function setLocalStorage(storage) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storage));
}

function getLocalStorage() {
    // return localStorage.getItem(LOCAL_STORAGE_KEY);
    return null;
}

export default { setLocalStorage, getLocalStorage };