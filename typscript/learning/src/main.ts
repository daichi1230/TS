interface Guitarist {
    name?: string,
    active: boolean,
    albums:(string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie Van Halen',
    active: true,
    albums: ['Van Halen', 1984, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy Page',
    active: false,
    albums: ['Led Zeppelin I', 'Led Zeppelin II', 'Led Zeppelin III']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`;
}

console.log(greetGuitarist(evh));