/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { getAllCountries, getBorderCountries, getCountry, getRegion } from "./../api/countries"
import useAppState from "../state/useAppState"
import { setCountries, setInitState, setLoading } from './../state/actionHandler'
import StateType from "../state/State.type"
import CountryType from "../components/Detail/Country.type"
import { SelectChangeEvent } from "@mui/material"

export const useAllCountries = () => {
    const { dispatch } = useAppState()

    useEffect(() => {
        const state: StateType = JSON.parse(
            localStorage.getItem("state") as string
        );
        if (state && state.theme && state.countries.length > 0) {
            dispatch(setInitState(state));
            dispatch(setLoading(false))
        }
        getAllCountries().then((countries) => {
            if (countries && countries.length > 0) {
                dispatch(setCountries(countries))
                dispatch(setLoading(false))
            }
        })
    }, [dispatch])
}

export const useCounty = (name: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [country, setCountry] = useState<CountryType[]>([])
    const [error, setError] = useState<boolean>(false)
    useEffect(() => {
        getCountry(name).then(country => {
            if (country.length > 0) {
                setCountry(country)
                setIsLoading(false)
                setError(false)
            } else {
                setError(true)
            }
        })
    }, [name])

    return { isLoading, country, error }
}

export const useRegion = () => {
    const { dispatch } = useAppState()
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setLoading(true))
        getRegion(event.target.value as string).then((countries) => {
            if (countries.length > 0) {
                dispatch(setCountries(countries));
                dispatch(setLoading(false))

            }
        })
    }
    return [handleChange];
}

export const useBorderCountries = (codes: string) => {
    const [countries, setCountries] = useState<CountryType[]>([])
    useEffect(() => {
        getBorderCountries(codes).then(countries => {
            setCountries(countries)
        })
    }, [codes])
    return { countries }
}