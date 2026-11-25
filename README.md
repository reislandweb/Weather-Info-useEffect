# 🌦️ Aplicación del Tiempo con React + Vite

Una aplicación web desarrollada con **React** y **Vite** para consultar el pronóstico meteorológico en tiempo real utilizando la API de **OpenWeather**. Este proyecto está enfocado en practicar el manejo de efectos secundarios (`useEffect`), peticiones asíncronas (`async/await`), geolocalización y renderizado dinámico de listas.

---

## 📋 Características principales

- **Carga inicial:** Al iniciar la aplicación, se muestra por defecto el pronóstico extendido de **Madrid** (o la ubicación actual del usuario si acepta los permisos de geolocalización).
- **Buscador de ciudades:** Formulario interactivo con input de texto y botón para consultar el clima de cualquier ciudad del mundo.
- **Pronóstico extendido (`WeatherList`):** Componente contenedor que renderiza la lista con la previsión de los próximos días.
- **Detalle meteorológico (`WeatherCard`):** Componente tarjeta que muestra la información de las próximas horas:
  - 🕒 Horario
  - 🌡️ Temperatura (en grados Celsius)
  - ☁️ Estado del tiempo (ej. *despejado, nubes, lluvia*)

---

## ✨ Funcionalidades Extra

- **🖼️ Iconografía dinámica (EXTRA 1):** Cada `WeatherCard` incluye el icono correspondiente al estado del tiempo proporcionado por OpenWeather.
- **📍 Geolocalización automática (EXTRA 2):** En el primer renderizado, la app solicita permiso al navegador (`navigator.geolocation`) para obtener las coordenadas del usuario y mostrar su clima local en lugar de Madrid.

---

## 🛠️ Tecnologías y dependencias

- **React** (`useState`, `useEffect`)
- **Vite** (Entorno de desarrollo ultrarrápido)
- **OpenWeather API** (Endpoint *5 day / 3 hour forecast*)
- **UUID** (`uuid` de NPM para generar claves únicas en el renderizado de listas)
- **CSS3**

---

## 📂 Estructura sugerida del proyecto

```text
├── public/
├── src/
│   ├── components/
│   │   ├── WeatherList/
│   │   │   └── WeatherList.jsx   # Lista del pronóstico extendido
│   │   └── WeatherCard/
│   │       └── WeatherCard.jsx   # Tarjeta individual (hora, temp, estado e imagen)
│   ├── App.jsx                   # Buscador, lógica de fetch, geolocalización y estados
│   ├── App.css
│   └── main.jsx
├── .env                          # Variables de entorno (API Key)
├── package.json
└── vite.config.js
```

---

## 🚀 Instalación y puesta en marcha

1. **Clona este repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Accede a la carpeta del proyecto:**
   ```bash
   cd <NOMBRE_DEL_PROYECTO>
   ```

3. **Instala las dependencias (incluyendo `uuid`):**
   ```bash
   npm install
   npm install uuid
   ```

4. **Configura tu API Key de OpenWeather:**
   - Regístrate gratis en [OpenWeatherMap](https://openweathermap.org) y obtén tu API Key.
   - Crea un archivo `.env` en la raíz del proyecto y añade la siguiente variable (es obligatorio el prefijo `VITE_` para que Vite la reconozca):
     ```env
     VITE_OPENWEATHER_API_KEY=tu_api_key_aqui
     ```

5. **Levanta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

---

## 💡 Notas técnicas de implementación

- **Endpoint recomendado:** Para obtener el pronóstico extendido y por franjas de horas en el plan gratuito de OpenWeather, se utiliza:
  ```text
  https://openweathermap.org{ciudad}&units=metric&lang=es&appid={API_KEY}
  ```
- **Iconos del clima:** OpenWeather devuelve un código de icono (ej. `10d`) que se puede renderizar dinámicamente mediante la URL:
  ```text
  https://openweathermap.orgimg/wn/{codigo_icono}@2x.png
  ```
- **Claves únicas con UUID:** Se emplea `uuidv4()` en el `.map()` dentro de `WeatherList` para garantizar identificadores únicos por cada `WeatherCard` renderizada.
