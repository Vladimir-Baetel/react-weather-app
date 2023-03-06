export interface WeatherData {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  country: string;
  localtime: string;
}

export interface Current {
  temp_c: number;
  condition: Condition;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}
