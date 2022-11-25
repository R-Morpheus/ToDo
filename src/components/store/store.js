const cards = [
    {
        id: '1',
        title: 'Learning how to cook',
    },
    {
        id: '2',
        title: 'Making sandwich',
    },
    {
        id: '3',
        title: 'Taking the trash out',
    },
];

const data = {
    lists: {
        'list-1': {
            id: '1',
            title: 'Todo',
            cards,
        },
    },
    listIds: ['1'],
};

export default data;