export type UserType = {
    firstName: string,
    lastName: string,
    role: string
} 

const Users: UserType[] = [
    {
        "firstName": "Dmitriy",
        "lastName": "Dyachkov",
        "role": "roommate"
    },
    {
        "firstName": "Nikita",
        "lastName": "Sokolov",
        "role": "roommate"
    },
    {
        "firstName": "Aleksey",
        "lastName": "Vorozhkov",
        "role": "roommate"
    },
]

export default Users