import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CatalogLayout from "./components/CatalogLayout";

// 1. Функция для получения данных из Strapi
async function getUniversities() {
    try {
        // Делаем запрос к созданной вами коллекции.
        // Обязательно добавляем ?populate=*, чтобы подтянулись картинки (поле image)
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

        const res = await fetch(`${strapiUrl}/api/universities-cards?populate=*`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Ошибка при получении данных из Strapi");
        }

        const json = await res.json();
        return json.data; // Возвращаем массив карточек
    } catch (error) {
        console.error("Ошибка fetch:", error);
        return []; // В случае ошибки возвращаем пустой массив, чтобы сайт не падал
    }
}

// 2. Делаем компонент страницы асинхронным (async)
export default async function UniversitiesPage() {
    // Получаем данные карточек университетов
    const universities = await getUniversities();

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Заголовок страницы */}
                    <h1 className="text-4xl font-bold text-[#101828] mb-8">Университеты</h1>

                    {/* Передаем полученные из Strapi данные в ваш компонент макета каталога.
            Внутри CatalogLayout вы сможете их отрендерить в сетку.
          */}
                    <CatalogLayout universities={universities} />
                </div>
            </main>

            <Footer />
        </div>
    );
}