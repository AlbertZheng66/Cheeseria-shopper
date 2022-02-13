export type Cheese = {
  uuid: string;
  name: string;
  imageUrl: string;
  price: number
};

export type SelectedCheese = {
  cheese: Cheese;
  amount: number;
};
