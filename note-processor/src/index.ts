export const handler = async (event: any = {}): Promise<any> => {
  // tslint:disable-next-line:no-console
  console.log('Hello World!');

  const response = JSON.stringify(event, null, 2);

  return response;
};
