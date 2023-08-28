import create from "zustand";

interface StateStore {
	toggleSearch: boolean
	toggleFn: () => void;
}
export const useStateStore = create<StateStore>((set)=>({
	toggleSearch: false,
	toggleFn: () =>
	    set((state) => ({
	      toggleSearch: !state.toggleSearch
	    })),
	
	}
))