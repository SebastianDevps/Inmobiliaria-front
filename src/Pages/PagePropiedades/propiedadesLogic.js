import { create } from 'zustand';
import { inmobiliario } from "../../Components/dataInmobiliarios";

export const usePropiedadesStore = create((set, get) => ({
  searchTerm: "",
  selectedLocations: [],
  propertiesToShow: 12,
  withDescuento: false,
  priceRange: {
    min: 300000,
    max: 100000000,
  },
  isFilterOpen: false,

  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedLocations: (locations) => set({ selectedLocations: locations }),
  setPropertiesToShow: (count) => set({ propertiesToShow: count }),
  setWithDescuento: (value) => set({ withDescuento: value }),
  setPriceRange: (range) => set({ priceRange: range }),
  setIsFilterOpen: (value) => set({ isFilterOpen: value }),

  handleLocationChange: (location) => {
    const { selectedLocations } = get();
    const newLocations = selectedLocations.includes(location)
      ? selectedLocations.filter(item => item !== location)
      : [...selectedLocations, location];
    set({ selectedLocations: newLocations });
  },

  clearFilters: () => set({
    selectedLocations: [],
    withDescuento: false,
    priceRange: {
      min: 300000,
      max: 100000000,
    }
  }),

  getFilteredProperties: () => {
    const { searchTerm, selectedLocations, priceRange, withDescuento } = get();
    
    return inmobiliario.filter((item) => {
      const matchesSearch = item.titulo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(item.ubicacion);
      const price = parseFloat(item.precio.toString().replace(/[^0-9.-]+/g, ""));
      const withDiscount = item.descuento > 0;
      const matchesPrice = price >= priceRange.min && price <= priceRange.max;

      return matchesSearch && matchesLocation && matchesPrice && (withDescuento ? withDiscount : true);
    });
  }
}));
