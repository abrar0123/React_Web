import React from "react";
import Card from "../UI/Card/card";
import FlexCard from "../UI/Card/FlexCard";
import contact from "../../assets/Icons/profil.png";
import Container from "../UI/Card/Container";

export default function about_Contact({ items }) {
  return (
    <Card>
      {items.map((item) => {
        return (
          <FlexCard className="aboutcontact">
            <p style={{ marginRight: "20px" }}>{item.title}</p>
            <p>{item.name}</p>
          </FlexCard>
        );
      })}
    </Card>
  );
}
