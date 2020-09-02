const LOCAL_STORAGE_KEY = '__buublefinder__';
const default_level = {
    1: {
        unlock: true,
        score: 0,
        color_number: 2,
        tries: 2,
        board: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    2: {
        unlock: false,
        score: 0,
        color_number: 4,
        tries: 3,
        board: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    3: {
        unlock: false,
        score: 0,
        color_number: 8,
        tries: 6,
        board: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    4: {
        unlock: false,
        score: 0,
        color_number: 12,
        tries: 8,
        board: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    5: {
        unlock: false,
        score: 0,
        color_number: 16,
        tries: 18,
        board: [
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 0, 0]
        ]
    },
    6: {
        unlock: false,
        score: 0,
        color_number: 16,
        tries: 18,
        board: [
            [1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1]
        ]
    },
    7: {
        unlock: false,
        score: 0,
        color_number: 18,
        tries: 18,
        board: [
            [1, 1, 1, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1]
        ]
    },
    8: {
        unlock: false,
        score: 0,
        color_number: 18,
        tries: 18,
        board: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    9: {
        unlock: false,
        score: 0,
        color_number: 20,
        tries: 18,
        board: [
            [1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1]
        ]
    },
    10: {
        unlock: false,
        score: 0,
        color_number: 20,
        tries: 18,
        board: [
            [1, 1, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 1, 1]
        ]
    },
};

const levels = () => {
    var ls = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (ls == 'null' || ls == null) {
        ls = {};
    } else {
        ls = JSON.parse(ls);
    }

    var config = {};
    for (let [key, storage] of Object.entries(default_level)) {
        if (ls.hasOwnProperty(key)) {
            config[key] = { ...default_level[key], ...ls[key] };
        } else {
            config[key] = { ...default_level[key] };
        }
    }
    return config;
};

function setLocalStorage(storage) {
    var config_default = { ...levels() };
    for (let [key, value] of Object.entries(config_default)) {
        if (storage.hasOwnProperty(key)) {
            config_default[key] = { ...config_default[key], ...storage[key] };
        }
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(config_default));
}

function eraseLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_KEY, '{}');
}

const colors = [
    "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300",
    "#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477",
    "#8B0707", "#329262", "#5574A6", "#3B3EAC"
];

export { levels, colors, setLocalStorage, eraseLocalStorage };