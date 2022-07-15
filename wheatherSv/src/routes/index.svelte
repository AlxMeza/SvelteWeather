<script>
    import { getWeatherFrom } from '../services/weather.js';
    import WeatherFooter from '../components/footer.svelte';
    import WeatherIcon from '../components/weather-icon.svelte'
    const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather }
    <section>
        <h1>{weather.country}</h1>
        <h4>{weather.name}</h4>
        <h2>{weather.temperature}°</h2>
        <WeatherIcon icon={weather.icon} description={weather.description}/>
        <h3>{weather.description}</h3>
    </section>
    <WeatherFooter {weather}/>
{/await}


<style>
    @import url('https://fonts.googleapis.com/css2?family=Heebo&family=Quicksand:wght@300;400;500&family=Trocchi&display=swap');
    section{
        padding: 1rem;
    }

    h1{
        font-weight: 300;
        font-size: 2rem;
        font-family: 'Hebbo', sans-serif;
        color: #333;
        text-transform: uppercase;
        padding: 2rem 0 0 0;
    }

    h2{
        font-weight: 300;
        font-size: 5rem;
        font-family: 'Qucksand', sans-serif;
        color: #333;
        text-transform: uppercase;
        padding: 2rem 0 0 0;
    }

    h3{ 
        font-weight: 500;
        font-family: 'Qucksand', sans-serif;
        transform: rotate(-90deg);
        position: absolute;
        top: 5.2rem;
        right: 0.1rem;
    }

    h4{ 
        font-weight: 500;
        font-size: 1.2rem;
        color: #333;
        text-transform: uppercase;
        font-family: 'Qucksand', sans-serif;
        margin-top: .5rem;
    }
</style>

