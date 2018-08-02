
export const healthOptions = [
    {value: "alcohol-free", label: "Alcohol-Free" },
    {value: "gluten-free", label: "Gluten-Free" },
    {value: "celery-free", label: "Celery-Free" },
    {value: "kidney-friendly", label: "Kidney-Friendly" },
    {value: "crustacean-free", label: "Crustacean-Free" },
    {value: "kosher", label: "Kosher" },
    {value: "dairy-free", label: "Dairy-Free" },
    {value: "low-Potassium", label: "Low-Potassium" },
    {value: "eggs-free", label: "Eggs-Free" },
    {value: "lupine-free", label: "Lupine-Free" },
    {value: "fish-free", label: "Fish-Free" },
    {value: "mustard-free", label: "Mustard-Free" },
    {value: "no-added-oil", label: "No-Added-Oil" },
    {value: "red-meat-free", label: "Red-Meat-Free" },
    {value: "low-sugar", label: "Low-Sugar" },
    {value: "sesame-free", label: "Sesame-Free" },
    {value: "paleo", label: "Paleo" },
    {value: "shellfish-free", label: "Shellfish-Free" },
    {value: "peanut-free", label: "Peanut-Free" },
    {value: "soy-free", label: "Soy-Free" },
    {value: "pescatarian", label: "Pescatarian" },
    {value: "sugar-conscious", label: "Sugar-Conscious" },
    {value: "pork-free", label: "Pork-Free" },
    {value: "tree-nut-free", label: "Tree-Nut-Free" },
    {value: "vegan", label: "Vegan" },
    {value: "wheat-free", label: "Wheat-Free" },
    {value: "vegetarian", label: "Vegetarian" },
];

export const dietOptions = [
    {value: "balanced", label: "Balanced" },
    {value: "high-fiber", label: "High-Fiber" },
    {value: "high-protein", label: "High-Protein" },
    {value: "low-carb", label: "Low-Carb" },
    {value: "low-fat", label: "Low-Fat" },
    {value: "low-sodium", label: "Low-Sodium" },
];

export const nutrientOptions = [
    { placeholder: "Calcium (mg)" },
    { placeholder: "Fat (g)" },
    { placeholder: "Carbs (g)" },
    { placeholder: "Trans Fat (g)" },
    { placeholder: "Cholesterol (mg)" },
    { placeholder: "Iron (mg)" },
    { placeholder: "Monounsat (g)" },
    { placeholder: "Fiber (g)" },
    { placeholder: "Polyunsat (g)" },
    { placeholder: "Folate (ug)" },
    { placeholder: "Saturated (g)" },
    { placeholder: "Potassium (mg)" },
    { placeholder: "Vitamin B6 (mg)" },
    { placeholder: "Vitamin C (mg)" },
    { placeholder: "Magnesium (mg)" },
    { placeholder: "Riboflavin (mg)" },
    { placeholder: "Sodium (mg)" },
    { placeholder: "Sugars (g)" },
    { placeholder: "Energy (kcal)" },
    { placeholder: "Thiamin (mg)" },
    { placeholder: "Niacin (mg)" },
    { placeholder: "Vitamin E (mg)" },
    { placeholder: "Phosp (mg)" },
    { placeholder: "Vitamin A (ug)" },
    { placeholder: "Protein (g)" },
    { placeholder: "Vitamin B12 (ug)" },
    { placeholder: "Vitamin D (ug)" },
    { placeholder: "Vitamin K (ug)" },
];

export const dropdownOptions = [
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
