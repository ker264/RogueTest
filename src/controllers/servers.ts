let servers = [
    { id: '0', name: 'Adrenalin', cost: -1, text: "Получи энергию", keyWords: "Сжечь" },
    { id: '1', name: 'Hunter Mark', cost: 1, text: "Наложи метку", keyWords: "Сжечь" },
    { id: '2', name: 'Scavenge', cost: 0, text: "Получи энергию", keyWords: "Сжечь" },
    { id: '3', name: 'Song of Selerity', cost: 1, text: "Всем скорость", keyWords: "Сжечь" },
    { id: '4', name: 'Wild Hunt', cost: 0, text: "+1 к меткам, метка за ману сейчас", keyWords: "Сжечь" },
    { id: '5', name: 'Expert Tracker', cost: 1, text: "Посмотри 5 карт", keyWords: "Сжечь" },
    { id: '6', name: 'Deflect', cost: 1, text: "щит + карта"},
    { id: '7', name: 'Deflect', cost: 1, text: "щит + карта"},
    { id: '8', name: 'Deflect', cost: 1, text: "щит + карта"},
    { id: '9', name: 'Deflect', cost: 1, text: "щит + карта"},
    { id: '10', name: 'Setup', cost: 1, text: "1 карта в слеж ходу, Посмотри 3 возьми 2"},
    { id: '11', name: 'Slice', cost: 1, text: "Удар + метка"},
    { id: '12', name: 'Dual Strike', cost: 1, text: "Два удара"},
    { id: '13', name: 'Rupture', cost: 1, text: "Сломать ногу"},
    { id: '14', name: 'Flex', cost: 1, text: "Flex карта, хз что положить"}
];

export const getAll = (req, res) => {
    res.status(200).json(servers);
}

export const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}

export const remove = (requet, response) => {
    console.log(requet.params);
    servers = servers.filter(s => s.id !== requet.params.id)
    response.json({ message: `Server ${requet.params.id} has been removed.` })
}