let coverageMap = new Map();

export function test(msg, fn) {
    console.log('正在测试', msg)
    fn()
}

export function init() {
    [1, 2, 3, 4, 5, 6].forEach((item) => {
        coverageMap.set(file + ":" + item, 0)
    })
}

function lg(file, line) {
    console.log(file + ":" + line);
    let count = coverageMap.get(file + ":" + line)
    coverageMap.set(file + ":" + line, count + 1);
}

export function Result() {
    coverageMap.forEach((value, key) => {
        console.log(key + ":" + value);
    });
}
