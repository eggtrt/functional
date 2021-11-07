map(filter(users, function (u) { return u.age >= 30 }), function(u) { return u.name});
// 30살 이상인 사람들의 이름 나열

map(filter(users2, function (u) { return u.getAge() >= 30 }), function(u) { return u.getName()}); // 메서드 실행으로 변경