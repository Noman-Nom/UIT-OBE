
export const userColums = [
    { field: 'id', headerName: 'ID', width: 70 },

    {
        field: "user",
        headerName: "User",
        width: 290,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt={params.row.name} />
                    {params.row.name}

                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'UserType', headerName: 'User Type', width: 130 },
    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {
                        params.row.status
                    }
                </div>
            )
        }
    },
]
export const userData = [
    {
        id: 1,
        name: "Ghazanfarullah Khan",
        img: "/sir.jpeg",
        email: "ghazanfarkhan@uit.edu",
        UserType: "Dr Prof",
        status: "Active"

    },

    {
        id: 2,
        name: "Muhammad Noman",
        img: "/noman.jpg",
        email: "noman@uit.edu",
        UserType: "Student",
        status: "InActive"

    },

    {
        id: 3,
        name: "Rabia Bilal",
        img: "/sample.jpg",
        email: "rbilal@uit.edu",
        UserType: "Egr, Prof",
        status: "Active"

    },

    {
        id: 4,
        name: "Raza Muhammad ",
        img: "/noman.jpg",
        email: "rmuhammad@uit.edu",
        UserType: "Dr Prof",
        status: "Active"

    },

    {
        id: 5,
        name: "Sheraz Ahmed",
        img: "/noman.jpg",
        email: "noman@uit.edu",
        UserType: "Student",
        status: "InActive"

    },

    {
        id: 6,
        name: "Ayesha Usman",
        img: "/sample.jpg",
        email: "rbilal@uit.edu",
        UserType: "Egr, Prof",
        status: "Active"

    },
    {
        id: 4,
        name: "Raza Muhammad ",
        img: "/noman.jpg",
        email: "rmuhammad@uit.edu",
        UserType: "Dr Prof",
        status: "Active"

    },

    {
        id: 5,
        name: "Sheraz Ahmed",
        img: "/noman.jpg",
        email: "noman@uit.edu",
        UserType: "Student",
        status: "InActive"

    },

    {
        id: 6,
        name: "Ayesha Usman",
        img: "/sample.jpg",
        email: "rbilal@uit.edu",
        UserType: "Egr, Prof",
        status: "Active"

    },
    {
        id: 4,
        name: "Raza Muhammad ",
        img: "/noman.jpg",
        email: "rmuhammad@uit.edu",
        UserType: "Dr Prof",
        status: "Active"

    },

    {
        id: 5,
        name: "Sheraz Ahmed",
        img: "/noman.jpg",
        email: "noman@uit.edu",
        UserType: "Student",
        status: "InActive"

    },

    {
        id: 6,
        name: "Ayesha Usman",
        img: "/sample.jpg",
        email: "rbilal@uit.edu",
        UserType: "Egr, Prof",
        status: "Active"

    },

]