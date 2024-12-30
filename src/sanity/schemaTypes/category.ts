const Categories= {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        description: "Name of the category ",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        description: "A short description of the category.",
      },
    ],
  };
  export default Categories