
const dropdownData = [
    {
        title: "Max Time:",
        options: [
            {value: "15", display: "15 minutes"},
            {value: "30", display: "30 minutes"},
            {value: "45", display: "45 minutes"},
            {value: "60", display: "1 hour"},
            {value: "90", display: "1.5 hours"},
            {value: "120", display: "2 hours"},
            {value: "150", display: "2.5 hours"},
            {value: "999", display: "Any"},
        ],
        id: "inputGroupSelect01",
        selected: 3
    },
    {
        title: "Max Produce:",
        options: [
            {value: "6", display: "6 items"},
            {value: "8", display: "8 items"},
            {value: "10", display: "10 items"},
            {value: "12", display: "12 items"},
            {value: "14", display: "14 items"},
            {value: "16", display: "16 items"},
            {value: "18", display: "18 items"},
            {value: "99", display: "Any"},
        ],
        id: "inputGroupSelect02",
        selected: 2
    },
    {
        title: "Max Cal:",
        options: [
            {value: "300", display: "300 Cal"},
            {value: "400", display: "400 Cal"},
            {value: "500", display: "500 Cal"},
            {value: "600", display: "600 Cal"},
            {value: "700", display: "700 Cal"},
            {value: "800", display: "800 Cal"},
            {value: "900", display: "900 Cal"},
            {value: "99999", display: "Any"},
        ],
        id: "inputGroupSelect03",
        selected: 2
    },
];

export default dropdownData;
