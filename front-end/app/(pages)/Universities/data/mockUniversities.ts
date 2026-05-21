export interface University {
    id: number;
    name: string;
    image: string;
    programsCount: number;
    studentsCount: number;
    location: {
        city: string;
        state: string;
        country: string;
    };
    cost: number;
    acceptanceRate: number;
    type: "Частный" | "Государственный";
}

export const mockUniversities: University[] = [
    {
        id: 1,
        name: "Harvard University",
        image: "/image/HomeContent/PartnerUniversities/Cambridge University.jpg",
        programsCount: 120,
        studentsCount: 23000,
        location: { city: "Cambridge", state: "MA", country: "США" },
        cost: 54000,
        acceptanceRate: 4.5,
        type: "Частный",
    },
    {
        id: 2,
        name: "Stanford University",
        image: "/image/HomeContent/PartnerUniversities/Princeton University.webp",
        programsCount: 150,
        studentsCount: 22000,
        location: { city: "Stanford", state: "CA", country: "США" },
        cost: 56000,
        acceptanceRate: 4.3,
        type: "Частный",
    },
    {
        id: 3,
        name: "MIT",
        image: "/image/HomeContent/PartnerUniversities/ETH Zurich.jpg",
        programsCount: 120,
        studentsCount: 11000,
        location: { city: "Cambridge", state: "MA", country: "США" },
        cost: 57000,
        acceptanceRate: 4.7,
        type: "Частный",
    },
    {
        id: 4,
        name: "University of California, Berkeley",
        image: "/image/HomeContent/PartnerUniversities/University of Melbourne.jpg",
        programsCount: 140,
        studentsCount: 30000,
        location: { city: "Berkeley", state: "CA", country: "США" },
        cost: 44000,
        acceptanceRate: 16.0,
        type: "Государственный",
    },
    {
        id: 5,
        name: "Princeton University",
        image: "/image/HomeContent/PartnerUniversities/Oxford University.webp",
        programsCount: 90,
        studentsCount: 8000,
        location: { city: "Princeton", state: "NJ", country: "США" },
        cost: 55000,
        acceptanceRate: 5.8,
        type: "Частный",
    },
    {
        id: 6,
        name: "University of Toronto",
        image: "/image/HomeContent/PartnerUniversities/University of Toronto.jpg",
        programsCount: 200,
        studentsCount: 60000,
        location: { city: "Toronto", state: "ON", country: "Канада" },
        cost: 38000,
        acceptanceRate: 43.0,
        type: "Государственный",
    },
    // Дубли для демонстрации "Показать еще"
    {
        id: 7,
        name: "Harvard University",
        image: "/image/HomeContent/PartnerUniversities/Cambridge University.jpg",
        programsCount: 120,
        studentsCount: 23000,
        location: { city: "Cambridge", state: "MA", country: "США" },
        cost: 54000,
        acceptanceRate: 4.5,
        type: "Частный",
    },
    {
        id: 8,
        name: "Stanford University",
        image: "/image/HomeContent/PartnerUniversities/Princeton University.webp",
        programsCount: 150,
        studentsCount: 22000,
        location: { city: "Stanford", state: "CA", country: "США" },
        cost: 56000,
        acceptanceRate: 4.3,
        type: "Частный",
    },
    {
        id: 9,
        name: "MIT",
        image: "/image/HomeContent/PartnerUniversities/ETH Zurich.jpg",
        programsCount: 120,
        studentsCount: 11000,
        location: { city: "Cambridge", state: "MA", country: "США" },
        cost: 57000,
        acceptanceRate: 4.7,
        type: "Частный",
    },
    {
        id: 10,
        name: "University of California, Berkeley",
        image: "/image/HomeContent/PartnerUniversities/University of Melbourne.jpg",
        programsCount: 140,
        studentsCount: 30000,
        location: { city: "Berkeley", state: "CA", country: "США" },
        cost: 44000,
        acceptanceRate: 16.0,
        type: "Государственный",
    },
    {
        id: 11,
        name: "Princeton University",
        image: "/image/HomeContent/PartnerUniversities/Oxford University.webp",
        programsCount: 90,
        studentsCount: 8000,
        location: { city: "Princeton", state: "NJ", country: "США" },
        cost: 55000,
        acceptanceRate: 5.8,
        type: "Частный",
    },
    {
        id: 12,
        name: "University of Toronto",
        image: "/image/HomeContent/PartnerUniversities/University of Toronto.jpg",
        programsCount: 200,
        studentsCount: 60000,
        location: { city: "Toronto", state: "ON", country: "Канада" },
        cost: 38000,
        acceptanceRate: 43.0,
        type: "Государственный",
    },
];
