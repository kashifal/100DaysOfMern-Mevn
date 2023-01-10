
exports.AddProductController = (req, res, next) => { 
  res.render("add-product", {
    title: "Add Products",
    data: [{ title: "book" }, { title: "pen" }],
  });
};
