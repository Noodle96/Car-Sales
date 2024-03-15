import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";


export default async function Home({searchParams}: {searchParams: any}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer  || '',
    year: searchParams.year || 2018,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  // console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return(
    <main className=" overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de carros</h1>
          <p>Explora los carros que te podría gustar</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard 
                  car={car}
                  key={index}
                />
              ))}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className=" text-black text-xl font-bold">No hay resultados</h2>
            <p>{allCars?.message}</p>
          </div>
        )}


      </div>
    </main>
  );
}