export const documentMask = value => {
  value.replace(/[^a-zA-Z0-9]/g, '')
};