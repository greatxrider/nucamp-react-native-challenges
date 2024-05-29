const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
    {
        id: 0,
        name: 'guitar',
        type: INSTRUMENT_TYPE_STRING
    },
    {
        id: 1,
        name: 'xylophone',
        type: INSTRUMENT_TYPE_PERCUSSION
    },
    {
        id: 2,
        name: 'zither',
        type: INSTRUMENT_TYPE_STRING
    },
    {
        id: 3,
        name: 'bagpipes',
        type: INSTRUMENT_TYPE_WIND
    },
];

const sortedInstruments = [...instruments].sort((a, b) => a.name.localeCompare(b.name));

const sortItems = (objArr) => {
    return (
        objArr.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        })
    )
}

console.log(sortItems(sortedInstruments));
console.log(instruments);

const getType = (objArr, type) => {
    return objArr.filter((item) => item.type === type);
}

console.log(getType(instruments, INSTRUMENT_TYPE_STRING));

const getNames = (objArr) => {
    return objArr.map((item) => item.name);
}

console.log(getNames(instruments));
console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING)));
