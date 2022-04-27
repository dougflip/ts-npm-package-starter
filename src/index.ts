type HelloWorldArgs = {
  name: string;
};

export function helloWorld({ name }: HelloWorldArgs): string {
  return `Hello ${name}`;
}
