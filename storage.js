class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Miami';
    this.defaultState = 'FL';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('city') === null) {
      this.state = this.defaultCity;
    } else {
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}
