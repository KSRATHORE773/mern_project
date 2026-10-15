import React, { useState } from 'react'

function StudentScreen() {
    const [students, setStudents] = useState([
        {
            "id": 1,
            "name": "Aarav Sharma",
            "phone": "9000000001",
            "email": "aarav.sharma@example.com",
            "dob": "2005-03-15",
            "createdat": "2026-10-01T10:30:00Z",
            "updateat": "2026-10-01T10:30:00Z"
        },
        {
            "id": 2,
            "name": "Priya Patel",
            "phone": "9000000002",
            "email": "priya.patel@example.com",
            "dob": "2004-07-22",
            "createdat": "2026-10-02T09:15:00Z",
            "updateat": "2026-10-05T11:20:00Z"
        },
        {
            "id": 3,
            "name": "Rahul Verma",
            "phone": "9000000003",
            "email": "rahul.verma@example.com",
            "dob": "2005-01-10",
            "createdat": "2026-10-03T08:45:00Z",
            "updateat": "2026-10-03T08:45:00Z"
        },
        {
            "id": 4,
            "name": "Sneha Gupta",
            "phone": "9000000004",
            "email": "sneha.gupta@example.com",
            "dob": "2004-11-05",
            "createdat": "2026-10-04T12:00:00Z",
            "updateat": "2026-10-06T14:30:00Z"
        },
        {
            "id": 5,
            "name": "Vikram Singh",
            "phone": "9000000005",
            "email": "vikram.singh@example.com",
            "dob": "2005-06-18",
            "createdat": "2026-10-05T07:30:00Z",
            "updateat": "2026-10-05T07:30:00Z"
        },
        {
            "id": 6,
            "name": "Ananya Joshi",
            "phone": "9000000006",
            "email": "ananya.joshi@example.com",
            "dob": "2004-09-12",
            "createdat": "2026-10-06T10:00:00Z",
            "updateat": "2026-10-07T09:00:00Z"
        },
        {
            "id": 7,
            "name": "Rohan Mehta",
            "phone": "9000000007",
            "email": "rohan.mehta@example.com",
            "dob": "2005-02-28",
            "createdat": "2026-10-07T11:15:00Z",
            "updateat": "2026-10-07T11:15:00Z"
        },
        {
            "id": 8,
            "name": "Kavya Reddy",
            "phone": "9000000008",
            "email": "kavya.reddy@example.com",
            "dob": "2004-04-20",
            "createdat": "2026-10-08T08:20:00Z",
            "updateat": "2026-10-09T13:45:00Z"
        },
        {
            "id": 9,
            "name": "Aditya Kumar",
            "phone": "9000000009",
            "email": "aditya.kumar@example.com",
            "dob": "2005-08-14",
            "createdat": "2026-10-09T09:30:00Z",
            "updateat": "2026-10-09T09:30:00Z"
        },
        {
            "id": 10,
            "name": "Neha Agarwal",
            "phone": "9000000010",
            "email": "neha.agarwal@example.com",
            "dob": "2004-12-03",
            "createdat": "2026-10-10T10:45:00Z",
            "updateat": "2026-10-11T12:15:00Z"
        },
        {
            "id": 11,
            "name": "Arjun Mishra",
            "phone": "9000000011",
            "email": "arjun.mishra@example.com",
            "dob": "2005-05-25",
            "createdat": "2026-10-11T07:50:00Z",
            "updateat": "2026-10-11T07:50:00Z"
        },
        {
            "id": 12,
            "name": "Isha Choudhary",
            "phone": "9000000012",
            "email": "isha.choudhary@example.com",
            "dob": "2004-10-17",
            "createdat": "2026-10-12T13:10:00Z",
            "updateat": "2026-10-14T15:00:00Z"
        },
    ]);



    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>createdat</th>
                        <th>updatedin</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((sRow) =>
                        <tr>
                            <td>{sRow.id}</td>
                            <td>{sRow.name}</td>
                            <td>{sRow.dob}</td>
                            <td>{sRow.email}</td>
                            <td>{sRow.phone}</td>
                            <td>{sRow.createdat}</td>
                            <td>{sRow.updateat}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

}
export default StudentScreen
