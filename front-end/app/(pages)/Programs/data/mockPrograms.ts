export interface Program {
    id: number;
    name: string;              // Изменили c title на name, как в Strapi
    image: string | null;      // Ссылка на картинку из медиабиблиотеки (может быть null)
    duration: number;          // Числовое поле длительности из Strapi
    universitiesCount: number; // Число ВУЗов
    averageSalary: number;     // Средняя зарплата
    careerPaths: string[];     // Массив профессий
    category: "Технологии" | "Бизнес" | "Медицина" | "Инженерия" | "Искусство" | "IT" | string; // Поле направления из Strapi
    degree: "Bachelor" | "Master" | "PhD" | "Pre-Med" | "Бакалавриат" | "Магистратура" | string;  // Поле уровня образования из Strapi
}