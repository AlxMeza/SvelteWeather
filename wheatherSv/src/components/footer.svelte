<script>
    export let weather;
</script>

<footer>
    <div>
        <span>{weather.humidity}</span>
        <strong>Humidity</strong>
    </div>

    <div>
        <span>{weather.windSpeed}</span>
        <strong>Windspeed</strong>
    </div>

    <div>
        <span>{weather.feelslike}</span>
        <strong>Feelslike</strong>
    </div>
</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;600&family=Quicksand&family=Raleway:wght@200;400;500&display=swap');
    footer {
        border: 2px solid black;
        padding: 1rem 2rem;
        width: 80%;
        margin: 0 auto;
        border-radius: 0.3rem;
        display: flex;
        text-align: center;
        justify-content: space-around;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 2rem;
    }
    span{
        font-family: 'Noto Sans', sans-serif;
        display: block;
        font-weight: 600;
        font-size: 1rem;
    }
    strong{
        font-family: 'Raleway', sans-serif;
        color: #444;
        font-weight: 500;
    }
</style>