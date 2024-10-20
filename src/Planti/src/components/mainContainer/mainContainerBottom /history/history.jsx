import "./history.css";

function History () {

   const data= [
        {
            "name": "Alice Johnson",
            "src": "https://i.pravatar.cc/150?img=1"
        },
        {
            "name": "Michael Smith",
            "src": "https://i.pravatar.cc/150?img=2"
        },
        {
            "name": "Sofia Lee",
            "src": "https://i.pravatar.cc/150?img=3"
        },
        {
            "name": "James Brown",
            "src": "https://i.pravatar.cc/150?img=4"
        },
        {
            "name": "Emily Davis",
            "src": "https://i.pravatar.cc/150?img=5"
        },
        {
            "name": "David Wilson",
            "src": "https://i.pravatar.cc/150?img=6"
        },
        {
            "name": "Olivia Taylor",
            "src": "https://i.pravatar.cc/150?img=7"
        }
    ]

    return(
        <div className="ms-25 w-30 px-4 pt-4">
            <h3 className="title-style mb-4">Recent Actvity</h3>
            <ul className="list-unstyled">
                {data.map(person => (
                    <li className="d-flex align-items-center mb-10">
                        <div className="d-flex align-items-center flex-grow-1">
                            <img src={person.src} alt={person.name} className="custom-size rounded-circle"/>
                            <div className="ms-5">
                                <h6 className="m-0 name-size">{person.name}</h6>
                                <p className="text-secondary m-0">Ordered a new plant</p>
                            </div>
                        </div>
                        <p className="text-secondary">3 min ago</p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default History;