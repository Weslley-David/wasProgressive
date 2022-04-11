import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: '     Em espera',
        tasks: [
            {
                id: uuidv4(),
                title: 'Aprender JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Aprender Git'
            },
            {
                id: uuidv4(),
                title: 'Aprender Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '  Fazendo',
        tasks: [
            {
                id: uuidv4(),
                title: 'Aprender CSS'
            }
        ]
    },
    {
        id: uuidv4(),
        title: '   Completo',
        tasks: [
            {
                id: uuidv4(),
                title: 'Aprender HTML'
            }
        ]
    }
]

export default mockData