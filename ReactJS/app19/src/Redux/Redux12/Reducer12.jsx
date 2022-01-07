let students=[
    {
        "fname": "Tonya",
        "lname": "Horman",
        "tel": "(940)575-7031",
        "address": "5812 Etiam Ave",
        "city": "Evergreen",
        "state": "TX",
        "zip": 94379
    },
    {
        "fname": "Lavette",
        "lname": "Maclatchie",
        "tel": "(174)707-5739",
        "address": "8300 Mattis Rd",
        "city": "Winfield",
        "state": "CO",
        "zip": 61563
    },
    {
        "fname": "Lauris",
        "lname": "Deitz",
        "tel": "(847)893-3645",
        "address": "2679 Aliquam Rd",
        "city": "Brookville",
        "state": "IA",
        "zip": 47952
    },
    {
        "fname": "Janis",
        "lname": "Khan",
        "tel": "(335)696-5758",
        "address": "8871 Ipsum St",
        "city": "Golden",
        "state": "NV",
        "zip": 95680
    },
    {
        "fname": "Janet",
        "lname": "Linden",
        "tel": "(297)517-1054",
        "address": "5953 Tincidunt Ln",
        "city": "Bremen",
        "state": "WY",
        "zip": 27407
    },
    {
        "fname": "Sandro",
        "lname": "Matthews",
        "tel": "(618)018-9737",
        "address": "5810 At Ct",
        "city": "Westminster",
        "state": "RI",
        "zip": 16938
    },
    {
        "fname": "Arnitra",
        "lname": "Reggio",
        "tel": "(414)540-8854",
        "address": "8337 Lectus Ave",
        "city": "Boynton Beach",
        "state": "ME",
        "zip": 75312
    },
]
const defaultValue={
    students:students
}
const Reducer12 = (state=defaultValue,action) => {
switch (action.type) {
    case "GET_ALL_STUDENTS":
        return defaultValue.students
       

    default:
        return []
}
}
export default Reducer12