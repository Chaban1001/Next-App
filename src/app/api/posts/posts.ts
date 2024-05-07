interface Posts {
  id: number;
  title: string;
  body: string;
}

export const posts: Posts[] = [
  {
    id: 1,
    title: 'Napoli won Seria A',
    body: 'Some info about italian football',
  },
  {
    id: 2,
    title: 'Manchester City won Premiership',
    body: 'Some info about English football',
  },
  {
    id: 3,
    title: 'Barcelona won La Liga',
    body: 'Some info about Spanish football',
  },
];
