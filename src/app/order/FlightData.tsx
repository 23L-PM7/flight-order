interface Flight {
  flight_number: string;
  departure_airport: string;
  departure_time: string;
  arrival_airport: string;
  arrival_time: string;
  airline: string;
  aircraft: string;
  status: string;
  gate?: string;
  terminal?: string;
  duration: string;
  price: number;
  price_details: PriceDetails;
  service_details: ServiceDetails;
}

interface PriceDetails {
  base_fare: number;
  taxes: number;
  fees: number;
}

interface ServiceDetails {
  luggage_allowance: string;
  meal_service: boolean;
  wifi_available: boolean;
  entertainment: string[];
}

export const FlightData: Flight = {
  flight_number: "ABC123",
  departure_airport: "John F. Kennedy International Airport",
  departure_time: "2024-05-02T10:00:00Z",
  arrival_airport: "Los Angeles International Airport",
  arrival_time: "2024-05-02T14:00:00Z",
  airline: "Delta Airlines",
  aircraft: "Boeing 737",
  status: "On time",
  gate: "A1",
  terminal: "Terminal 4",
  duration: "4 hours",
  price: 250.0,
  price_details: {
    base_fare: 200,
    taxes: 30,
    fees: 20,
  },
  service_details: {
    luggage_allowance: "2 bags, 23kg each",
    meal_service: true,
    wifi_available: false,
    entertainment: ["In-flight movies", "Music"],
  },
};
