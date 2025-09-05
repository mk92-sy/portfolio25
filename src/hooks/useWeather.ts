// hooks/useWeather.ts
import { useEffect, useState } from 'react'

interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
    pressure: number
  }
  weather: {
    main: string
    description: string
    icon: string
  }[]
}

const SEOUL_COORDS = {
  lat: 37.5665,
  lon: 126.978,
}

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&units=metric`
      )
      const data = await res.json()
      setCurrentWeather(data)
    } catch (err) {
      setError('날씨 정보를 불러오지 못했습니다.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          fetchWeather(latitude, longitude)
        },
        (err) => {
          console.warn('위치 권한 거부됨(서울 기본값)', err)
          fetchWeather(SEOUL_COORDS.lat, SEOUL_COORDS.lon)
        }
      )
    } else {
      console.warn('Geolocation API 미지원(서울 기본값)')
      fetchWeather(SEOUL_COORDS.lat, SEOUL_COORDS.lon)
    }
  }, [])

  return { currentWeather, loading, error }
}
