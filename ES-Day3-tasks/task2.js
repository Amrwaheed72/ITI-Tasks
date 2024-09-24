const mainCountry = document.getElementById("mainCountry");
const secondCountry = document.getElementById("secondCountry");
const countryInput = document.getElementById("countryInput");
const loadCountryBtn = document.getElementById("loadCountryBtn");
const errorMsg = document.getElementById("errorMsg");

loadCountryBtn.onclick = async () => {
    const mainC = countryInput.value.trim();
    if (!mainC) {
        showError("Please enter a country name.");
        return;
    }

    clearContent(); 
    await fetchCountryData(mainC);
};

const fetchCountryData = async (mainC) => {
    try {
        errorMsg.innerText = "";
        const res = await fetch(`https://restcountries.com/v2/name/${mainC}`);

        if (!res.ok) {
            throw new Error("Failed to fetch country data.");
        }

        const data = await res.json();
        if (!data.length) {
            showError("No data found for this country.");
            return;
        }

        const country = data[0];
        renderMainCountry(country);

        if (country.borders && country.borders.length > 0) {
            const neighbourCode = country.borders[0];
            await fetchNeighbourCountry(neighbourCode);
        } else {
            showError("This country has no neighboring countries.");
            secondCountry.innerHTML = "<p>No neighbours available.</p>";
        }
    } catch (error) {
        showError(error.message);
    }
};

const renderMainCountry = (country) => {
    const population = country.population / 1000000.0;

    mainCountry.innerHTML = `
        <img class="mainImg" src="${country.flag}" alt="${country.name}">
        <h1>${country.name}</h1>
        <h3>${country.region}</h3>
        <h4> 👫 ${population.toFixed(2)} M people</h4>
        <h4>🗣 ${country.languages[0].name}</h4>
        <h4> 💰 ${country.currencies[0].name}</h4>
    `;
};

const fetchNeighbourCountry = async (neighbourCode) => {
    try {
        const res = await fetch(`https://restcountries.com/v2/alpha/${neighbourCode}`);

        if (!res.ok) {
            throw new Error("Failed to fetch neighbor country data.");
        }

        const neighbour = await res.json();
        renderNeighbourCountry(neighbour);
    } catch (error) {
        showError(error.message);
    }
};

const renderNeighbourCountry = (neighbour) => {
    const population = neighbour.population / 1000000.0;

    secondCountry.innerHTML = `
        <img class="mainImg" src="${neighbour.flag}" alt="${neighbour.name}">
        <h1>${neighbour.name}</h1>
        <h3>${neighbour.region}</h3>
        <h4> 👫 ${population.toFixed(2)} M people</h4>
        <h4>🗣 ${neighbour.languages[0].name}</h4>
        <h4> 💰 ${neighbour.currencies[0].name}</h4>
    `;
};

const showError = (message) => {
    errorMsg.innerText = message;
};

const clearContent = () => {
    mainCountry.innerHTML = "";
    secondCountry.innerHTML = "";
    errorMsg.innerText = "";
};
