import caravanContextProps from "../helpers/caravanContext";

export interface item {
  instantBookable: boolean;
  location: string;
  name: string;
  passengersCapacity: string;
  pictures: string[];
  price: number;
  shower: boolean;
  sleepCapacity: number;
  toilet: boolean;
  vehicleType: "Intergrated" | "Alcove" | "BuiltIn" | "Campervan";
}

interface filterData {
  count: number;
  items: item[];
}

const dataFilter = (data: filterData, context: caravanContextProps) => {
  let inputItems: item[] = data.items;
  let filteredArr;
  //1.STEP - price filtering
  const priceFrom = context.priceRange[0];
  const priceTo = context.priceRange[1];

  filteredArr = inputItems.filter((item: item) => {
    if (item.price >= priceFrom && item.price <= priceTo) {
      return item;
    }
  });
  //2.STEP - type filtering
  const campervan = context.caravanType.campervan;
  const intergrated = context.caravanType.intergrated;
  const builtin = context.caravanType.builtin;
  const alcove = context.caravanType.alcove;

  if (campervan || intergrated || builtin || alcove) {
    let campervanArr: item[] = [];
    campervan
      ? (campervanArr = filteredArr.filter((item: item) => {
          if (item.vehicleType === "Campervan") return item;
        }))
      : null;
    let intergratedArr: item[] = [];
    intergrated
      ? (intergratedArr = filteredArr.filter((item: item) => {
          if (item.vehicleType == "Intergrated") return item;
        }))
      : null;
    let builtinArr: item[] = [];
    builtin
      ? (builtinArr = filteredArr.filter((item: item) => {
          if (item.vehicleType === "BuiltIn") return item;
        }))
      : null;
    let alcoveArr: item[] = [];
    alcove
      ? (alcoveArr = filteredArr.filter((item: item) => {
          if (item.vehicleType === "Alcove") return item;
        }))
      : null;

    filteredArr = campervanArr.concat(intergratedArr, builtinArr, alcoveArr);
  }
  //3.STEP - instant reservation
  const instant = context.instant;
  if (instant) {
    filteredArr = filteredArr.filter((item: item) => {
      if (item.instantBookable === true) return item;
    });
  }

  //RETURN FILTERED ARRAY
  return filteredArr;
};

export default dataFilter;
