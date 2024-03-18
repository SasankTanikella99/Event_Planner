import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planner",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planner",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Planner",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "GameNight Planner",
    },
    {
      id: 5,
      url: "./party.jpg",
      title: "Party Planner",
    },
    {
      id: 6,
      url: "./wedding.jpg",
      title: "Wedding Planner",
    },
  ];
  return (
    <>
    <div className="services container">
      <h2> Our Services</h2>
      <div className="banner">
        {
          services.map(element => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src = {element.url} alt={element.title} />
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
};

export default Services;
