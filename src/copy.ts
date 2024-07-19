const objCopy = <T>(obj: T): T => {
  const copy = Object.create(Object.getPrototypeOf(obj));

  Object.getOwnPropertyNames(obj).forEach((prop: string) =>
    Object.defineProperty(
      copy,
      prop,
      Object.getOwnPropertyDescriptor(obj, prop) as string
    )
  );
  return copy;
};

export { objCopy };
