import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenre = () => useData<Genre>('/genres');//using useGenre to hide data

export default useGenre