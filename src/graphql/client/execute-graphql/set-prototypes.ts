// Stringify and parse ensure that objects in the result
// have non-null prototypes. Otherwise, Next complains when passing
// data to client components.

export const setPrototypes = <TResult>(result: TResult) =>
  JSON.parse(JSON.stringify(result)) as TResult;
