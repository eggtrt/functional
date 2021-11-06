function findById (list, id) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].id == id) return list[i];
    }
}

function findById (list, id) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].id == id) return list[i];
    }
}

function findByName (list, name) {
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].name == name) return list[i];
    }
}

function findBy (key, list, val) {
    for (var i = 0; i < list.length; i++) {
        if (list[i][key] == val) return list[i];
    }
}