const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      user: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      doctor: [
        {
          namefirst: "Marlon",
          namelast: "Mini",
          email: "maidservantsSusanne@catkinsphiltersdisplays.gov",
          age: "36",
          money: "$24168.9",
          city: "Louisville",
        },
        {
          namefirst: "Zachary",
          namelast: "Kaeser",
          email: "townBurgessSpielbergs@rarityssurfaces.gov",
          age: "35",
          money: "$58864.43",
          city: "Gainesville",
        },
        {
          namefirst: "Jerry",
          namelast: "Kickliter",
          email: "afflictionBelgiums@ripostedmisconstrued.com",
          age: "87",
          money: "$62066.98",
          city: "Abilene",
        },
        {
          namefirst: "Lawerence",
          namelast: "Lloret",
          email: "squandergrieved@papergirlsabjuring.com",
          age: "86",
          money: "$91957.87",
          city: "Corpus Christi",
        },
        {
          namefirst: "Marquis",
          namelast: "Laurenti",
          email: "Newarksoliderstultifies@amortized.net",
          age: "50",
          money: "$50295.52",
          city: "Oxnard",
        },
        {
          namefirst: "Keven",
          namelast: "Lisby",
          email: "phalanxmouthpiece@smithiespottierthermal.edu",
          age: "11",
          money: "$89178.9",
          city: "Antioch",
        },
        {
          namefirst: "Mauricio",
          namelast: "Margulies",
          email: "oleanderssandblasted@betokenedawkwarder.edu",
          age: "51",
          money: "$18866.25",
          city: "Tucson",
        },
        {
          namefirst: "Jules",
          namelast: "Koscher",
          email: "crusadeintroducingflagstaffs@platoons.com",
          age: "13",
          money: "$69676.61",
          city: "Stamford",
        },
        {
          namefirst: "Brandon",
          namelast: "Lipsey",
          email: "believingentered@hydrogenates.me",
          age: "91",
          money: "$54116.41",
          city: "Phoenix",
        },
        {
          namefirst: "Corey",
          namelast: "Conesa",
          email: "despairedMondrian@godlessOkinawas.edu",
          age: "56",
          money: "$63244.84",
          city: "Gresham",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      saveUser: (data) => {
        setStore({ user: data });
      },
      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
