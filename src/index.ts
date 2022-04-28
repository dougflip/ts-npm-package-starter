export type HelloWorldArgs = {
  name: string;
};

/**
 * Returns a greeting string based on the provided name.
 */
export function helloWorld({ name }: HelloWorldArgs): string {
  return `Hello ${name}`;
}
