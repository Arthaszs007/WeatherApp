import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type LocationState ={
    city:string,
    lat:number,
    lon:number,
}

const locationSlice = createSlice({
    name:"location",
    initialState:{
        city :"Calgary",
        lat:51.0447,
        lon:-114.0719,
    },
    reducers:{
        setLocation:(state,action:PayloadAction<LocationState>)=>{
            const {city,lat,lon} = action.payload;
             state.city= city;
             state.lat = lat;
             state.lon = lon;
            }}       
})

export const {setLocation} = locationSlice.actions;
export default locationSlice.reducer;