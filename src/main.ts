import { FlameApp, FlameComponent } from "./core";

/**
 * FlameApp instance.
 */
const app = new FlameApp({document});

// defining components
const title = new FlameComponent("h1", "Hello Flame!");
const text = new FlameComponent("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum turpis accumsan dolor ultrices consectetur. Phasellus vel hendrerit ante, sit amet viverra libero. Aliquam nec tortor purus. Nulla ultricies lorem eget hendrerit posuere. Nunc pellentesque ipsum vitae ipsum porttitor volutpat. Proin a justo placerat, lobortis tortor vitae, posuere dolor. Duis felis orci, bibendum a mattis ac, efficitur id augue. Vestibulum libero augue, dapibus vitae maximus id, cursus in leo. Vivamus imperdiet at elit et sagittis. Donec consectetur urna varius faucibus bibendum.");

// defining atributes
title.setAttribute("style", "color:#fafafa;");
text.setAttribute("style", "color:gray;");

// append components to app
app.append([
  title.render(),
  text.render()
]);