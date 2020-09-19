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
        tries: 5,
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

const default_misc_config = {
    theme: 'bubble-finder',
    levels: {}
};

function full_default_config() {
    var ls = { ...default_misc_config };
    ls.levels = { ...default_level };
    return ls;
}

var _merge = function (target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object) Object.assign(source[key], _merge(target[key], source[key]))
    }

    // Join `target` and modified `source`
    Object.assign(target || {}, source)
    return target
}

const levels = () => {
    // console.log(default_level);
    var ls = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (ls === 'null' || ls === null) {
        ls = full_default_config();
    } else {
        ls = JSON.parse(ls);
    }

    return ls.levels;
};

function setLocalStorage(storage) {
    var config_default = storedConfigs();
    const new_config = _merge(config_default, storage);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(new_config));
}

function eraseLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function storedConfigs(){
    let configs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return configs ? configs : full_default_config();
}

// const colors = [
//     "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300",
//     "#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477",
//     "#8B0707", "#329262", "#5574A6", "#3B3EAC"
// ];

export { levels, setLocalStorage, eraseLocalStorage, storedConfigs };