import images from "./images";

/*

The Sazerac - $18 (90 ml)
Contents: Rye Whiskey, Absinthe, Peychaud's Bitters

*/

const wines = [
  {
    title: "Opus One Cabernet Sauvignon",
    price: "$350",
    tags: "Cabernet Sauvignon, Cabernet Franc, Merlot | 750 ml",
  },
  {
    title: "Westvleteren 12",
    price: "$20",
    tags: "Water, Barley malt, Hops, Yeast, Sugar | 330 ml",
  },
  {
    title: "Pétrus",
    price: "$3,500",
    tags: "Merlot grapes | 750 ml",
  },
  {
    title: "Goose Island Bourbon County Stout",
    price: "$25",
    tags: "Imperial Stout, Bourbon Barrel-Aged, Vanilla Bean | 473 ml",
  },
  {
    title: "Dom Perignon",
    price: "$200",
    tags: "Pinot Noir, Chardonnay | 750 ml",
  },
];

const cocktails = [
  {
    title: "The Ritz Sidecar",
    price: "$30",
    tags: "Cognac, Cointreau, Lemon Juice | 60 ml",
  },
  {
    title: "The Martini",
    price: "$25",
    tags: "Gin, Dry Vermouth, Olive | 90 ml",
  },
  {
    title: "The Last Word",
    price: "$20",
    tags: "Gin, Green Chartreuse, Lime Juice | 60 ml",
  },
  {
    title: "The Vieux Carré",
    price: "$15",
    tags: "Rye Whiskey, Cognac, Sweet Vermouth | 90 ml",
  },
  {
    title: "The Sazerac",
    price: "$18",
    tags: "Rye Whiskey, Absinthe, Peychaud's Bitters | 90 ml",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Michelin Star",
    subtitle: "Exquisite cuisine that sets the standard for fine dining.",
  },
  {
    imgUrl: images.award01,
    title: "AAA Five Diamond Award",
    subtitle: "Luxury at its finest, where every detail is a masterpiece.",
  },
  {
    imgUrl: images.award05,
    title: "James Beard Award",
    subtitle: "Celebrating the art of cooking and the joy of sharing a meal.",
  },
  {
    imgUrl: images.award03,
    title: "World's 50 Best Restaurants",
    subtitle: "Where culinary innovation meets unparalleled excellence.",
  },
];

export default { wines, cocktails, awards };
