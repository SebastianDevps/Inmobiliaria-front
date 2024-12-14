import { useState } from "react";
import { inmobiliario } from "../dataInmobiliarios";

export const usePropiedadesLogic = () => {
  const propertiesPerLoad = 12;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [propertiesToShow, setPropertiesToShow] = useState(propertiesPerLoad);
  const [withDescuento, setWithDescuento] = useState(false);
  const [priceRange, setPriceRange] = useState({
    min: 300000,
    max: 100000000,
  });

  const ubicacionesUnicas = [
    ...new Set(inmobiliario.map((item) => item.ubicacion)),
  ];

  const handleLocationChange = (location) => {
    setSelectedLocations(
      selectedLocations.includes(location)
        ? selectedLocations.filter((item) => item !== location)
        : [...selectedLocations, location]
    );
  };

  const handleFilterApply = () => {
    setIsFilterOpen(false);
  };

  const filteredProperties = inmobiliario.filter((item) => {
    const matchesSearch = item.titulo
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(item.ubicacion);
    const price = parseFloat(item.precio.toString().replace(/[^0-9.-]+/g, ""));
    const withDiscount = item.descuento > 0;
    const matchesPrice = price >= priceRange.min && price <= priceRange.max;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesPrice &&
      (withDescuento ? withDiscount : true)
    );
  });

  const loadMoreProperties = () => {
    setPropertiesToShow(propertiesToShow + propertiesPerLoad);
  };

  const clearFilters = () => {
    setSelectedLocations([]);
    setWithDescuento(false);
    setPriceRange({
      min: 300000,
      max: 100000000,
    });
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedLocations,
    propertiesToShow,
    withDescuento,
    setWithDescuento,
    priceRange,
    setPriceRange,
    ubicacionesUnicas,
    handleLocationChange,
    filteredProperties,
    loadMoreProperties,
    noResults: filteredProperties.length === 0,
    clearFilters,
    isFilterOpen,
    setIsFilterOpen,
    handleFilterApply,
  };
};
