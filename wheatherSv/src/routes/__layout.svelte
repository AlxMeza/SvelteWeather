<div>
    <slot />
</div>

<style>
    :global(body){
        background-color: #fdfdfd;
        display: grid;
        place-content: center;
        margin: 0;
        min-height: 100vh;
    }

    :global(*, *::after, *::before){
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4, h5){
        margin: 0;
    }

    div{
        aspect-ratio: 9 / 16;
        width: 25rem;
        max-width: 100%;
        border-radius: 0.4rem;
        display: block;
        box-shadow: 0 0 100px rgba(0,0,0,0.1);
        position: relative;
    }
    
</style>