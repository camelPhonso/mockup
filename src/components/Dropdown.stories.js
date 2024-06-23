import Dropdown from "./Dropdown"

export default {
  title: "Dropdown",
  component: Dropdown,
}

export const routes = {
  args: {
    options: [{ Title: "job1" }, { Title: "job2" }],
    keyName: "Title",
  },
}

export const occupations = {
  args: {
    options: [{ name: "Occupation 1" }, { name: "Occupation 2" }],
    keyName: "name",
  },
}
