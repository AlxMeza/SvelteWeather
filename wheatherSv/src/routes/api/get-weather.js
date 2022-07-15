const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dbf8306743msh52dd7cd9a02b6bcp16c5a7jsndb6059cdc28b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function get(event){
    const { searchParams } = event.url;
    const query = searchParams.get('q') ?? 'Mexico';
    //console.log('Query', query);
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)
    const data = await response.json();
    
       
    const { location, current } = data;
    const { country, localtime, name } = location;
    const {
            condition, 
            humidity, 
            is_day,
            feelslike_c, 
            temp_c, 
            wind_kph, 
            wind_dir
        } = current;
    const {code, text, icon} = condition;
            
    const body = {
        conditionCode: code,
        description: text,
        country, 
        localtime, 
        name,
        humidity,
        isDay: is_day,
        feelslike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDirection: wind_dir,
        icon        
    }

    return {
        status: 200,
        body: body
    }
}