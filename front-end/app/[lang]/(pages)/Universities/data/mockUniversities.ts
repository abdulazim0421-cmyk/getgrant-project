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
